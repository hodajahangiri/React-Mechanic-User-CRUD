import './Home.css';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import ServiceTickets from '../../components/ServiceTickets/ServiceTickets';

function Home() {

  const { isAuthenticated } = useAuth();

  return (
    <div style={{ flex: "1", padding: "20px" }}>
      {isAuthenticated ? <ServiceTickets/> :
        <>
          <h1 className='homeTitle'>Welcome to Mechanic Shop</h1>
          <p className='homeDescription'>Thank you for choosing us to work with.</p>
          <p className='homeDescription'>To continue you need to have an account with us.</p>
          <p className='homeDescription'>If you have an account, <Link className='link' to="/login">Login Here!</Link></p>
          <p className='homeDescription'>If you don't have an account, <Link className='link' to="/register">Register Here!</Link></p>
        </>}
    </div>
  )
}

export default Home