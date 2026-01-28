import ProfileCard from '../../components/ProfileCard/ProfileCard';
import './Profile.css';


function Profile() {
  return (
    <div style={{flex: "1",padding:"20px"}}>
      <h2 className='center'>Profile Information</h2>
      <ProfileCard/>
    </div>
  )
}

export default Profile