import { useEffect,useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function MechanicForm({ submitFunction, isRegister }) {

  const { mechanic } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    salary: 0
  });

  useEffect(() => {
    if (!isRegister && mechanic) {
      setFormData(prev => ({ ...prev, ...mechanic }));
      setFormData(prev => ({...prev, ["password"]: ""}));
    }
  }, []);


  const handleChange = event => {
    const { name, value } = event.target;
    if(name === "salary"){
      setFormData(prevData => ({ ...prevData, [name]: parseFloat(value) }));
    }else{
      setFormData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    submitFunction(formData);
    // isRegister ? navigate('/') : navigate('/profile');
    navigate('/profile');
  };

  return (
    <div className="formContainer">
      <h2>{isRegister ? "Register" : "Update"}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="fieldset-style">
          <legend>FirstName:  </legend>
          <input type="text"
            name="first_name"
            placeholder="first_name"
            required
            onChange={handleChange}
            value={formData.first_name} />
        </div>

        <div className="fieldset-style">
          <legend>LastName:  </legend>
          <input type="text"
            name="last_name"
            placeholder="Last Name"
            required
            onChange={handleChange}
            value={formData.last_name} />
        </div>

        <div className="fieldset-style">
          <legend>Email:  </legend>
          <input type="email"
            name="email"
            placeholder="example@gmail.com"
            required
            onChange={handleChange}
            value={formData.email} />
        </div>

        <div className="fieldset-style">
          <legend>Password:  </legend>
          <input type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            value={formData.password} />
        </div>

        <div className="fieldset-style">
          <legend>Phone:  </legend>
          <input type="tel"
            name="phone"
            placeholder="+###-###-####"
            required
            onChange={handleChange}
            value={formData.phone} />
        </div>

        <div className="fieldset-style">
          <legend>Address:  </legend>
          <input type="text"
            name="address"
            placeholder="Address"
            required
            onChange={handleChange}
            value={formData.address} />
        </div>

        <div className="fieldset-style">
          <legend>Salary:  </legend>
          <input type="number"
            name="salary"
            placeholder="Salary"
            required
            onChange={handleChange}
            value={formData.salary} />
        </div>

        <button className="submitBtn" type="submit">
          {isRegister ? "Register" : "Update"}
        </button>
      </form>
    </div>
  )
}

export default MechanicForm