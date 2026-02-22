import { useState, useEffect } from 'react';
import './Sidebar.css';
import { FaRegUser, FaRegFileAlt, FaBriefcase, FaBook, FaRegEnvelope } from 'react-icons/fa';

const Sidebar = () => {
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

    return (
        <aside className="sidebar">
            <nav className="nav-menu">
                <ul className="nav-list">
                    <li className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}>
                        <a href="#about" className="nav-link">
                            <span className="icon-wrapper">
                                <FaRegUser />
                            </span>
                            <span className="nav-text">ABOUT</span>
                        </a>
                    </li>
                    <li className={`nav-item ${activeTab === 'resume' ? 'active' : ''}`}>
                        <a href="#resume" className="nav-link">
                            <span className="icon-wrapper">
                                <FaRegFileAlt />
                            </span>
                            <span className="nav-text">RESUME</span>
                        </a>
                    </li>
                    <li className={`nav-item ${activeTab === 'portfolio' ? 'active' : ''}`}>
                        <a href="#portfolio" className="nav-link">
                            <span className="icon-wrapper">
                                <FaBriefcase />
                            </span>
                            <span className="nav-text">PORTFOLIO</span>
                        </a>
                    </li>
                    <li className={`nav-item ${activeTab === 'blog' ? 'active' : ''}`}>
                        <a href="#blog" className="nav-link">
                            <span className="icon-wrapper">
                                <FaBook />
                            </span>
                            <span className="nav-text">BLOG</span>
                        </a>
                    </li>
                    <li className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}>
                        <a href="#contact" className="nav-link">
                            <span className="icon-wrapper">
                                <FaRegEnvelope />
                            </span>
                            <span className="nav-text">CONTACT</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
