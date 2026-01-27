import { createContext, useContext, useEffect, useState } from 'react';

//Step 1
//Create the context
const AuthContext = createContext();

const ApiUrl = "https://mechanic-app-r9ih.onrender.com/";

//Step 2
//Create useAuth hook to consume this context
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
}

//Step 3
export const AuthProvider = ({ children }) => {
  const [mechanicToken, setMechanicToken] = useState(null);
  const [mechanic, setMechanic] = useState(null);

  //Grab already logged in user
  useEffect(() => {
    const savedMechanicToken = localStorage.getItem('mechanicToken');
    const savedMechanic = localStorage.getItem('mechanic');

    setMechanicToken(savedMechanicToken);
    setMechanic(JSON.parse(savedMechanic)); //parsing JSON object from LS
  }, []);

  // Login function
  const login = async (credentialData) => { 
    console.log(credentialData);
    try{
const response = await fetch(`${ApiUrl}mechanics/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentialData.email,
        password: credentialData.password
      })
    });

    console.log("Response");
    if(response.ok){
      const loginData = await response.json();
      console.log('Token data:', loginData);
      setMechanicToken(loginData.token);
      setMechanic(loginData.mechanic_data);
      localStorage.setItem("mechanicToken", loginData.token);
      localStorage.setItem("mechanic", JSON.stringify(loginData.mechanic_data)); //transforming the user into json readable string
    }else{
      alert("Error: Invalid Email or Password")
    }
    }catch(error){
      alert("Error: ", {error})
    }
    
    
  }


  const logout = () => {
    setMechanicToken(''); //clearing saved tokens
    setMechanic(null)
    localStorage.removeItem('mechanicToken');
    localStorage.removeItem('mechanic');
  }


  const value = {
    mechanicToken,
    mechanic,
    login,
    logout,
    isAuthenticated: mechanicToken ? true : false
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}