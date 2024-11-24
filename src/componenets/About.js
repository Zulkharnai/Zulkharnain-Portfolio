function about() {
    return (
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="section-title">About Me</h1>
            <div className="section-container">
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img
                                src="./assets/experience.png"
                                alt="Experience Icon"
                                className="icon"
                            />
                            <h3>Experience</h3>
                            <p>
                                <strong>3+ Years</strong>
                            </p>
                        </div>
                        <div className="details-container">
                            <img
                                src="./assets/education.png"
                                alt="Education Icon"
                                className="icon"
                            />
                            <h3>Education</h3>
                            <p>
                                <strong>M.Sc</strong> Master's Degree
                            </p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            As an experienced <strong>Node.js Developer</strong> with over <strong>3+ years</strong> of hands-on backend development experience, I have completed my undergraduate degree. I aspire to specialize in full-stack development as a proficient <strong>MERN Stack Developer</strong>. I have successfully completed <strong>6+ projects</strong>, including developing RESTful APIs with Node.js and Express, designing MongoDB and MySQL database schemas, integrating payment gateways and authentication systems, and optimizing application performance. Notable projects include building a scalable e-commerce platform that increased sales by <strong>40%</strong> within six months and creating a real-time chat application with Socket.io and React serving over <strong>10,000 active users</strong> daily. I am passionate about leveraging technology to drive innovation and thrive in collaborative environments.
                        </p>

                    </div>

                </div>

            </div>
        </section>

    );
}

export default about;