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
};

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
    try {
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
      if (response.ok) {
        const loginData = await response.json();
        console.log('Token data:', loginData);
        setMechanicToken(loginData.token);
        setMechanic(loginData.mechanic_data);
        localStorage.setItem("mechanicToken", loginData.token);
        localStorage.setItem("mechanic", JSON.stringify(loginData.mechanic_data)); //transforming the user into json readable string
      } else {
        alert("Error: Invalid Email or Password")
      }
    } catch (error) {
      alert("Error: ", error);
    }
  };

  //Logout function
  const logout = () => {
    setMechanicToken(''); //clearing saved tokens
    setMechanic(null)
    localStorage.removeItem('mechanicToken');
    localStorage.removeItem('mechanic');
  };

  // register mechanic
  const register = async (registerData) => {
    console.log("register function...")
    console.log("registerData: ", registerData)
    try {
      const response = await fetch(`${ApiUrl}mechanics`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
      });
      console.log("response", response)
      if (response.status === 429) {
        alert("Error: Too many request...Try again after one hour...");
      } else {
        const responseData = await response.json();
        console.log("responseData", responseData);
        if (response.ok) {
          setMechanicToken(responseData.token);
          setMechanic(responseData.mechanic_data);
          localStorage.setItem("mechanicToken", responseData.token);
          localStorage.setItem("mechanic", JSON.stringify(responseData.mechanic_data));
        } else {
          alert("Error: ", responseData.error);
        }
      }
    } catch (error) {
      alert("Error: ", error);
    }
  };

  //deleteMechanic function
  const deleteMechanic = async () => {
    try {
      const response = await fetch(`${ApiUrl}mechanics`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + mechanicToken
        }
      })
      const responseData = await response.json();
      if(response.ok){
        alert(responseData.message);
        logout();
      }else{
        alert(responseData.message);
      }
    } catch (error) {
      alert("Error: ", error);
    }
  }
  


  const value = {
    mechanicToken,
    mechanic,
    login,
    logout,
    register,
    deleteMechanic,
    isAuthenticated: mechanicToken ? true : false
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}