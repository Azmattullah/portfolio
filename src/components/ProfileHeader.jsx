import './ProfileHeader.css';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdOutlineEmail, MdLocationOn, MdOutlineFileDownload } from 'react-icons/md';
import { userData } from '../data/userData';
import { GiMailbox } from 'react-icons/gi';

const ProfileHeader = () => {
    const { profile } = userData;

    return (
        <header className="profile-header">
            <div className="profile-left">
                <div className="profile-avatar-container">
                    <div className="profile-avatar">
                        <img src={profile.avatarUrl} alt="Profile" />
                    </div>
                </div>

                <div className="profile-title">
                    <h1>{profile.name}</h1>
                    <p className="subtitle">{profile.title}</p>
                    <div className="social-links">
                        <a href="https://github.com/Azmattullah"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/md-azmattullah"><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/the_azmat"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div className="profile-right">
                <div className="info-grid">
                    <div className="info-item">
                        <span className="info-label">EMAIL</span>
                        <span className="info-value">
                            {profile.email} <MdOutlineEmail className="info-icon" />
                        </span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">CV</span>
                        <span className="info-value download-cv">
                            Download <MdOutlineFileDownload className="info-icon" />
                        </span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">LOCATION</span>
                        <span className="info-value">
                            {profile.location} <MdLocationOn className="info-icon" />
                        </span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">STATUS</span>
                        <span className="info-value status-badge">
                            {profile.statusEmoji}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ProfileHeader;
