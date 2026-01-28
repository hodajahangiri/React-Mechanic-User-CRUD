import { useAuth } from '../../contexts/AuthContext';
import MechanicForm from '../../components/MechanicForm/MechanicForm';

function Register() {

  const {register} = useAuth();

  return (
    <div style={{ flex: "1", padding: "20px" }}>
      <MechanicForm submitFunction={register} isRegister={true}/>
    </div>
  )
}

export default Register