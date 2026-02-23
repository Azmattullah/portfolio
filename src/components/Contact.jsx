import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // IMPORTANT: Replace these with your actual EmailJS credentials
        // Get these from https://dashboard.emailjs.com/
        const serviceId = 'service_j5s94er';
        const templateId = 'template_ygplpxn';
        const publicKey = 'QBsWBdAcggMaX_Onc';

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    setIsSubmitting(false);
                    setSubmitStatus('success');
                    form.current.reset();
                    // Clear success message after 5 seconds
                    setTimeout(() => setSubmitStatus(null), 5000);
                },
                (error) => {
                    setIsSubmitting(false);
                    setSubmitStatus('error');
                    console.log('FAILED...', error.text);
                }
            );
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
                <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="fullName" className="sr-only">Full name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="user_name"
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
                                name="user_email"
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
                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            <span className="submit-icon">✉</span> {isSubmitting ? 'Sending...' : 'Submit'}
                        </button>
                    </div>
                    {submitStatus === 'success' && (
                        <p className="submit-success">Message sent successfully! I'll get back to you soon.</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="submit-error">Failed to send message. Please try again later.</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
