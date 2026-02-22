import './SkillBar.css';

const SkillBar = ({ skillName, percentage }) => {
    return (
        <div className="skill-bar-container">
            <div className="skill-info">
                <span className="skill-name">{skillName}</span>
                <span className="skill-percentage">{percentage}%</span>
            </div>
            <div className="skill-track">
                <div
                    className="skill-fill"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;
