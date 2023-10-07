function Contact() {
    return (
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img
                        src="./assets/email.png"
                        alt="Email icon"
                        className="icon contact-icon email-icon"
                    />
                    <p>syedzulkharnain334@gmail.com</p>
                </div>
                <div className="contact-info-container">
                    <img
                        src="./assets/linkedin.png"
                        alt="LinkedIn icon"
                        className="icon contact-icon"
                        onClick={() => { window.location.href = 'https://www.linkedin.com/in/syedzulkharnain/' }}
                    />
                    <p><a href={() => { window.location.href = 'https://www.linkedin.com/in/syedzulkharnain/' }}>LinkedIn</a></p>
                </div>
            </div>
        </section>
    );
}

export default Contact;