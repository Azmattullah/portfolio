import './BlogPost.css';

const BlogPost = ({ post, onBack }) => {
    if (!post) return null;

    return (
        <article className="blog-post-section fade-in">
            <button className="back-btn" onClick={onBack}>
                <span className="back-arrow">←</span> Back to Blog
            </button>

            <header className="blog-post-header">
                <div className="post-series-badge">
                    <span className="series-icon">◆</span>
                    {post.series}
                </div>
                <h1 className="post-title">{post.title}</h1>
                <div className="post-meta">
                    <span className="post-date">{`${post.date.month} ${post.date.day}, ${post.date.year}`}</span>
                </div>
            </header>

            <div className="post-banner-img">
                <img src={post.image} alt={post.title} />
                {/* The decorative window dots for retro feel */}
                <div className="window-controls">
                    <span className="window-dot"></span>
                    <span className="window-dot"></span>
                    <span className="window-dot"></span>
                </div>
            </div>

            <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Static Mock Comments & Reactions Section matching screenshot */}
            <section className="post-reactions-section">
                <div className="author-links">
                    <a href="#" className="author-link"><span className="link-icon">G</span> GitHub</a>
                    <a href="#" className="author-link"><span className="link-icon">X</span> Twitter</a>
                    <a href="#" className="author-link"><span className="link-icon">in</span> LinkedIn</a>
                </div>
            </section>
        </article>
    );
};

export default BlogPost;
