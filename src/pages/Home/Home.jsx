import './Home.css';
import { useAuth } from '../../contexts/AuthContext';

function Home() {

  const {isAuthenticated} = useAuth();
  console.log(isAuthenticated);

  return (
    <div style={{flex: "1",padding:"20px"}}>
      {isAuthenticated ? "Welcome" : "Home"}
    </div>
  )
}

export default Home