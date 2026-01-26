import './Header.css';
import { useNavigate, NavLink } from 'react-router-dom';
import ThemeSwitch from '../ThemeSwitch';
import logo from '../../assets/logo.png';
import { useTheme } from "../../contexts/ThemeContext";
import { useAuth } from '../../contexts/AuthContext';



function Header() {

    const navigate = useNavigate();
    const { isDarkMode, toggleTheme } = useTheme();
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login')
    }

    return (
        <header className={isDarkMode ? 'mainDark' : 'mainLight'}>
            <div className='logo' onClick={() => navigate('/')}>
                <img src={logo} alt="MechanicShop" />
                <h1 >Mechanic Shop</h1>
            </div>
            <nav>
                <NavLink className={isDarkMode ? 'navLinkDark' : 'navLinkLight'} to="/">HOME</NavLink>
                {isAuthenticated ?
                    <>
                        <NavLink className={isDarkMode ? 'navLinkDark' : 'navLinkLight'} to="/profile">PROFILE</NavLink>
                        <p onClick={handleLogout}>LOGOUT</p>
                    </> : <>
                        <NavLink className={isDarkMode ? 'navLinkDark' : 'navLinkLight'} to="/login">LOGIN</NavLink>
                        <NavLink className={isDarkMode ? 'navLinkDark' : 'navLinkLight'} to="/register">Register</NavLink>
                    </>
                }
                <ThemeSwitch onClick={toggleTheme} />
            </nav>
        </header>
    )
}

export default Header