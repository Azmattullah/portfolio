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

                <div className="comments-header">
                    <h3>0 Comments</h3>
                </div>

                <div className="reaction-box">
                    <h4 className="reaction-prompt">What do you think?</h4>
                    <p className="reaction-subtitle">0 Responses</p>

                    <div className="reaction-emojis">
                        <button className="reaction-btn">👍<span className="reaction-label">Upvote</span></button>
                        <button className="reaction-btn">😂<span className="reaction-label">Funny</span></button>
                        <button className="reaction-btn">😍<span className="reaction-label">Love</span></button>
                        <button className="reaction-btn">😮<span className="reaction-label">Surprised</span></button>
                        <button className="reaction-btn">😡<span className="reaction-label">Angry</span></button>
                        <button className="reaction-btn">😢<span className="reaction-label">Sad</span></button>
                    </div>
                </div>

                {/* Mock Comment Input Area */}
                <div className="mock-comment-area">
                    <div className="comment-stats">
                        <span>0 Komentar</span>
                        <span className="login-link">Masuk ▼</span>
                    </div>

                    <div className="comment-input-box">
                        <div className="avatar-placeholder">G</div>
                        <div className="input-field">Mulai berdiskusi...</div>
                    </div>

                    <div className="comment-footer">
                        <span>MASUK DENGAN</span>
                        <div className="mock-social-icons">
                            <span className="mock-icon blue">D</span>
                            <span className="mock-icon light-blue">f</span>
                            <span className="mock-icon black">X</span>
                            <span className="mock-icon red">G</span>
                        </div>
                        <span className="or-text">ATAU DAFTAR DI DISQUS</span>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default BlogPost;
