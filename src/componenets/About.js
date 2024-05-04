function about() {
    return (
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img
                                src="./assets/experience.png"
                                alt="Experience icon"
                                className="icon"
                            />
                            <h3>Experience</h3>
                            <p>2+ years <br />Backend Development</p>
                        </div>
                        <div className="details-container">
                            <img
                                src="./assets/education.png"
                                alt="Education icon"
                                className="icon"
                            />
                            <h3>Education</h3>
                            <p>B.Sc. Bachelors Degree<br /></p>
                        </div>
                    </div>
                    <div className="text-container">
                        {/* <p>
                            Hello! I'm a Backend Developer with a passion for web development. My skill set includes JavaScript for creating interactive user interfaces, jQuery for dynamic web experiences, PHP and Laravel for robust backend solutions, and expertise in managing data with MySQL, MongoDB, and PostgreSQL. Eager to contribute my skills to innovative projects and collaborate with like-minded professionals.
                        </p> */}
                        <p>Experienced Jr. Node.js Developer with over 2 years of hands-on experience in backend development. Currently pursuing an
                            undergraduate degree, I aspire to specialize in full-stack development, aiming to become a proficient MERN Stack developer.
                            Passionate about leveraging technology to drive innovation, I thrive in collaborative environments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default about;