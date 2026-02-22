import { useState, useEffect } from 'react';
import './ContentArea.css';
import ServiceCard from './ServiceCard';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Blog from './Blog';
import { userData } from '../data/userData';

const ContentArea = () => {
    const [activeTab, setActiveTab] = useState('about');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '') || 'about';
            setActiveTab(hash);
        };

        // Set initial
        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const renderContent = () => {
        if (activeTab === 'resume') {
            return <Resume />;
        }
        if (activeTab === 'portfolio') {
            return <Portfolio />;
        }
        if (activeTab === 'contact') {
            return <Contact />;
        }
        if (activeTab === 'blog') {
            return <Blog />;
        }

        // Default to 'about' content
        return (
            <section className="about-section fade-in">
                <h2 className="section-title">
                    About Me
                    <div className="title-underline"></div>
                </h2>

                <div className="about-text">
                    {userData.about.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <h3 className="sub-section-title">What I'm Doing</h3>

                <div className="services-grid">
                    {userData.services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>

                <h3 className="sub-section-title">Companies I've Worked With</h3>
                <div className="clients-list">
                    {userData.clients.map((client) => (
                        <div key={client.id} className="client-logo">
                            <span style={{ color: client.color, fontWeight: 'bold' }}>{client.name}</span>
                        </div>
                    ))}
                </div>

            </section>
        );
    };

    return (
        <main className="content-area">
            {renderContent()}

            {/* Footer status indicating system is fine or partially down */}
            <footer className="content-footer">
                <p><span className="status-dot warning"></span> Partially systems are down . <a href="#">Status</a> . <a href="#">Uptime</a></p>
            </footer>
        </main>
    );
};

export default ContentArea;
