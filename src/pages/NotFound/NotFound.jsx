import './NotFound.css';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

function NotFound() {
    const { isDarkMode } = useTheme()
    return (
        <div style={{ flex: "1", padding: "0px" }}>
            <div className={isDarkMode ? 'mainContainer notFoundDark' : 'mainContainer notFoundLight'}>
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link className={isDarkMode ? 'a-dark' : 'a-light'} to="/">Go to Home</Link>
            </div>
        </div>
    )
}

export default NotFound