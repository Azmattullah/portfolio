import './BackgroundShapes.css';

const BackgroundShapes = () => {
    return (
        <div className="bg-shapes-container">
            {/* 
        We use CSS triangles to build a pseudo-isometric or shattered glass pattern
        as seen in the screenshot's top-left corner.
      */}
            <div className="shape shape-1" />
            <div className="shape shape-2" />
            <div className="shape shape-3" />
            <div className="shape shape-4" />
            <div className="shape shape-5" />
            <div className="shape shape-6" />
            <div className="shape shape-7" />
        </div>
    );
};

export default BackgroundShapes;
