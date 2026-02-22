import './TimelineItem.css';

const TimelineItem = ({ title, date, subtitle, descriptionPoints }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4 className="timeline-title">{title}</h4>
            {date && <span className="timeline-date">{date}</span>}
            {subtitle && <p className="timeline-subtitle">{subtitle}</p>}

            {descriptionPoints && descriptionPoints.length > 0 && (
                <ul className="timeline-desc">
                    {descriptionPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TimelineItem;
