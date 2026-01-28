import { useAuth } from '../../contexts/AuthContext';
import MechanicForm from '../../components/MechanicForm/MechanicForm';

function UpdateProfile() {

  const {UpdateProfile} = useAuth();

  return (
    <div style={{ flex: "1", padding: "20px" }}>
      <MechanicForm submitFunction={UpdateProfile} isRegister={false}/>
    </div>
  )
}

export default UpdateProfile