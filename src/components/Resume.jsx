import './Resume.css';
import TimelineItem from './TimelineItem';
import SkillBar from './SkillBar';
import TechStackCard from './TechStackCard';
import { MdOutlineWorkOutline, MdOutlineMenuBook } from 'react-icons/md';
import { userData } from '../data/userData';

const Resume = () => {
    const { resume } = userData;

    return (
        <section className="resume-section fade-in">
            <h2 className="section-title">
                Resume
                <div className="title-underline"></div>
            </h2>

            <div className="resume-timeline-header">
                <div className="icon-box">
                    <MdOutlineWorkOutline />
                </div>
                <h3 className="sub-section-title">Experience</h3>
            </div>

            <div className="timeline-container">
                {resume.experience.map((job) => (
                    <TimelineItem
                        key={job.id}
                        title={job.title}
                        date={job.date}
                        subtitle={job.subtitle}
                        descriptionPoints={job.descriptionPoints}
                    />
                ))}
            </div>

            <div className="education-grid">
                <div className="education-column">
                    <div className="resume-timeline-header">
                        <div className="icon-box">
                            <MdOutlineMenuBook />
                        </div>
                        <h3 className="sub-section-title">Education</h3>
                    </div>
                    <div className="timeline-container min-timeline">
                        {resume.education.map((edu) => (
                            <TimelineItem
                                key={edu.id}
                                title={edu.title}
                                date={edu.date}
                                subtitle={edu.subtitle}
                            />
                        ))}
                    </div>
                </div>

                <div className="education-column">
                    <div className="resume-timeline-header">
                        <div className="icon-box">
                            <MdOutlineMenuBook />
                        </div>
                        <h3 className="sub-section-title">Nonformal Education</h3>
                    </div>
                    <div className="timeline-container min-timeline">
                        {resume.nonformalEducation.map((edu) => (
                            <TimelineItem
                                key={edu.id}
                                title={edu.title}
                                date={edu.date}
                                subtitle={edu.subtitle}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <h3 className="sub-section-title">Skills</h3>
            <div className="skills-card">
                {resume.skills.map((skill) => (
                    <SkillBar key={skill.id} skillName={skill.name} percentage={skill.percentage} />
                ))}
            </div>

            <h3 className="sub-section-title mt-2">Tech Stack</h3>
            <div className="tech-stack-grid">
                {resume.codeSkills.map((skill) => (
                    <TechStackCard
                        key={skill.id}
                        name={skill.name}
                        category={skill.category}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </section>
    );
};

export default Resume;
