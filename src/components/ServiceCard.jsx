import './ServiceCard.css';

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="service-card">
            <div className="service-icon">
                {icon}
            </div>
            <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-desc">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
