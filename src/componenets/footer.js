function Profile() {
    return (
        <div className="footer-section">
        <footer className="footer">
            <div className="footer-container">
                {/* About / Address Section */}
                <div className="footer-column">
                    <h3 className="footer-title">Thanks For Visiting</h3>
                    <p className="footer-description">
                        Dedicated developer with expertise in full-stack and Node.js, driven to create innovative and efficient solutions for complex challenges
                    </p>
                    
                </div>
    
                {/* Contact Info Section */}
                <div className="footer-column">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-list">
                        <li><i class="fas fa-solid fa-arrow-right icon"></i><a href="#about">About</a></li>
                        <li><i class="fas fa-solid fa-arrow-right icon"></i><a href="#skill">Skill</a></li>
                        <li><i class="fas fa-solid fa-arrow-right icon"></i><a href="#experience">Experience</a></li>
                        <li><i class="fas fa-solid fa-arrow-right icon"></i><a href="#projects">Projects</a></li>
                        <li><i class="fas fa-solid fa-arrow-right icon"></i><a href="#contact">Contact</a></li>
               
                    </ul>
                </div>
                
    
                {/* Social Media Links Section */}
                <div className="footer-column">
                    <h3 className="footer-title">Contact Info</h3>
                    <ul className="footer-list">
                        <li><i className="fas fa-envelope icon" aria-hidden="true"></i> syedzulkharnain334@gmail.com</li>
                        <li><i className="fas fa-phone-alt icon" aria-hidden="true"></i> +91-9172377686</li>
                        <li><i className="fas fa-map-marker-alt icon" aria-hidden="true"></i> Aurangabad, Maharashtra, 431001</li>
                    </ul>
                    <div className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/syedzulkharnain/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            style={{color: 'white'}}
                        >
                            <img src="./assets/linkedin.png" alt="LinkedIn" />
                        </a>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <img src="./assets/github.png" alt="GitHub" />
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <i className="fa fa-github icon" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    

    );
}

export default Profile;