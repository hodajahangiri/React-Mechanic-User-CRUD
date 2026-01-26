import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/update" element={<UpdateProfile />} />
      </Routes>
    </>
  )
}

export default App
