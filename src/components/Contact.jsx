import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Since no backend is defined, we'll just alert for visual feedback of submission
        alert("Message sent! (Visual demo only)");
    };

    return (
        <section className="contact-section fade-in">
            <h2 className="section-title">
                Contact
                <div className="title-underline"></div>
            </h2>

            <div className="contact-opportunities">
                <span className="opportunities-label">Open for opportunities: </span>
                <span className="opportunities-value">Yes</span>
            </div>

            <h3 className="sub-section-title">Contact Form</h3>

            <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="fullName" className="sr-only">Full name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="form-input"
                                placeholder="Full name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailAddress" className="sr-only">Email address</label>
                            <input
                                type="email"
                                id="emailAddress"
                                name="emailAddress"
                                className="form-input"
                                placeholder="Email address"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="sr-only">Your message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-input"
                            placeholder="Your message"
                            rows="6"
                            required
                        ></textarea>
                    </div>

                    <div className="form-submit-container">
                        <button type="submit" className="submit-btn">
                            <span className="submit-icon">✉</span> Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
