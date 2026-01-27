import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import './LoginForm.css'

function LoginForm() {

    const navigate = useNavigate();

    const [credentialData, setCredentialData] = useState({
        email: "",
        password: ""
    });

    const { login } = useAuth();

    const handleChange = event => {
        const { name, value } = event.target;
        setCredentialData(prevData => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check for not sending empty object
        if(credentialData.email === "" || credentialData.password === ""){
            alert("Please Fill Out All fields...")
        }else{
            await login(credentialData);
                navigate('/');
        };
    };

    return (
        <div className="LoginFormContainer">
            <h2>Sign Up</h2>
            <form className="LoginForm" onSubmit={handleSubmit}>
                <div className="fieldset-style">
                    <legend>Email:  </legend>
                    <input type="email"
                        name="email"
                        id="email"
                        placeholder='Enter email'
                        required
                        onChange={handleChange}
                        value={credentialData.email} />
                </div>
                <div className="fieldset-style">
                    <legend>Password:  </legend>
                    <input type="password"
                        name="password"
                        placeholder='Enter password'
                        required
                        onChange={handleChange}
                        value={credentialData.password} />
                </div>
                <button className="submitBtn" type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to='/register'>Sign up here!</Link></p>
        </div>
    )
}

export default LoginForm