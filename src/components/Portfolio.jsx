import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Portfolio.css';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    // Extract unique categories for filter tabs
    const categories = ['All', ...new Set(portfolioData.map(item => item.category))];

    const filteredProjects = portfolioData.filter(item => {
        if (filter === 'All') return true;
        return item.category === filter;
    });

    return (
        <section className="portfolio-section fade-in">
            <h2 className="section-title">
                Portfolio
                <div className="title-underline"></div>
            </h2>

            <div className="portfolio-filters">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="portfolio-grid">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="portfolio-card">
                        <div className="portfolio-card-header">
                            <span className="window-dot"></span>
                        </div>
                        <div className="portfolio-card-img">
                            <img src={project.image} alt={project.title} />
                            <div className="category-badge">{project.category}</div>
                        </div>
                        <div className="portfolio-card-content">
                            <h4 className="project-title">{project.title}</h4>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="project-tag">{tag}</span>
                                ))}
                            </div>
                            {project.link && project.link !== '#' && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-website-btn">
                                    Website
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
