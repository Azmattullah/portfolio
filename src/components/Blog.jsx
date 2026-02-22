import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import { blogData } from '../data/blogData';

const Blog = () => {
    // State to track if a specific post is open. Null means show the list.
    const [selectedPostId, setSelectedPostId] = useState(null);

    // Scroll to top when switching views
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedPostId]);

    const handleSelectPost = (id) => {
        setSelectedPostId(id);
    };

    const handleBackToList = () => {
        setSelectedPostId(null);
    };

    const selectedPost = selectedPostId
        ? blogData.find(post => post.id === selectedPostId)
        : null;

    return (
        <div className="blog-container">
            {selectedPost ? (
                <BlogPost post={selectedPost} onBack={handleBackToList} />
            ) : (
                <BlogList onSelectPost={handleSelectPost} />
            )}
        </div>
    );
};

export default Blog;
