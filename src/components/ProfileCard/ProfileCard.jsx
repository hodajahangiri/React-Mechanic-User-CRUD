import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import './ProfileCard.css'

function ProfileCard() {

    const { mechanic, deleteMechanic } = useAuth();

    const navigate = useNavigate();

    const handleDelete = () => {
        deleteMechanic();
        navigate('/');
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2>{mechanic?.first_name || 'N/A'} {mechanic?.last_name || 'N/A'}</h2>
            </div>
            <div className="profile-card">
                <div className="profile-info">
                    <div className="info-item">
                        <label>First Name</label>
                        <p>{mechanic?.first_name || 'N/A'}</p>
                    </div>
                    <div className="info-item">
                        <label>Last Name</label>
                        <p>{mechanic?.last_name || 'N/A'}</p>
                    </div>
                    <div className="info-item">
                        <label>Email</label>
                        <p>{mechanic?.email || 'N/A'}</p>
                    </div>
                    <div className="info-item">
                        <label>Phone</label>
                        <p>{mechanic?.phone || 'N/A'}</p>
                    </div>
                    <div className="info-item">
                        <label>Address</label>
                        <p>{mechanic?.address || 'N/A'}</p>
                    </div>
                    <div className="info-item">
                        <label>Salary</label>
                        <p>{mechanic?.salary || 'N/A'}</p>
                    </div>
                </div>
                <div className="profile-actions">
                    <button className="btn-update" onClick={() => navigate('/profile/update')}>Update Profile</button>
                    <button className="btn-delete" onClick={handleDelete}>Delete Account</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard