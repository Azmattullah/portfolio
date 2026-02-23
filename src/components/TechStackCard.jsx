import './TechStackCard.css';

const TechStackCard = ({ icon, name, category }) => {
    return (
        <div className="tech-stack-card fade-in">
            <div className="tech-stack-icon-container">
                {typeof icon === 'string' ? (
                    <img src={icon} alt={`${name} logo`} className="tech-stack-logo" />
                ) : (
                    icon
                )}
            </div>
            <div className="tech-stack-info">
                <h4 className="tech-stack-name">{name}</h4>
                <p className="tech-stack-category">{category}</p>
            </div>
        </div>
    );
};

export default TechStackCard;
