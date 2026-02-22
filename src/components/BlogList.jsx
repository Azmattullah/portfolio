import { blogData } from '../data/blogData';
import './BlogList.css';

const BlogList = ({ onSelectPost }) => {
    return (
        <section className="blog-list-section fade-in">
            <h2 className="section-title">
                Blog
                <div className="title-underline"></div>
            </h2>

            <div className="blog-grid">
                {blogData.map((post) => (
                    <div
                        key={post.id}
                        className="blog-card"
                        onClick={() => onSelectPost(post.id)}
                    >
                        <div className="blog-card-header">
                            <span className="window-dot"></span>
                        </div>

                        <div className="blog-card-img">
                            <img src={post.image} alt={post.title} />

                            {/* Retro floating date badge */}
                            <div className="blog-date-badge">
                                <span className="date-day">{post.date.day}</span>
                                <span className="date-month">{post.date.month}</span>
                            </div>
                        </div>

                        <div className="blog-card-content">
                            <h4 className="blog-title">{post.title}</h4>
                            <p className="blog-excerpt">{post.excerpt}</p>

                            {/* Visual series indicator similar to screenshot */}
                            <div className="blog-series-badge">
                                <span className="series-icon">◆</span>
                                {post.series}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogList;
