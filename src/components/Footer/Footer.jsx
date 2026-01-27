import './Footer.css';
import { useTheme } from '../../contexts/ThemeContext';

function Footer() {

  const { isDarkMode } = useTheme();

  return (
    <footer className={isDarkMode ? "darkFooter" : "lightFooter"}>
      <div className="footerColumn">
        <div className="contactUsFooter">
          <h4>Get in Touch: </h4>
          <p>Email: mechanic_shop@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="contactUsFooter">
          <h4>Related Links: </h4>
          <ul>
            <li>Branches</li>
            <li>Office hours: 9 am - 6 pm</li>
            <li>Schedule an Appointment</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mechanic Shop Website. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer