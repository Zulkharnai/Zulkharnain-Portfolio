function Profile() {
    return (
        <section id="profile">
            {/* <div className="section__pic-container">
                <img src="./assets/ProfilePhoto.jpg" alt="Zulkharnain profile picture" />
            </div> */}
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Syed Zulkharnain</h1>
                <p className="section__text__p2">Full Stack Developer</p>
                <div className="btn-container">
                    <button
                        className="btn btn-color-2"
                        onClick={() => { window.open('./assets/resume.pdf') }}
                    >
                        Download CV
                    </button>
                    <button className="btn btn-color-1" onClick={() => { window.dialog.showModal() }} >
                        Contact Info
                    </button>

                    <dialog id="dialog">
                        <h2>Contact Info.</h2>
                        <div className="ContactInfo">
                            <img
                                src="./assets/linkedin.png"
                                alt="My LinkedIn profile"
                                className="icon"
                            />
                            <p className="ContactInfoContent"><a href="https://www.linkedin.com/in/syedzulkharnain">LinkedIn Profile</a></p>
                        </div>
                        <div className="ContactInfo">
                            <img
                                height="10"
                                width="30"
                                src="./assets/call.png"
                                alt="My LinkedIn profile"
                                className="icon"
                            />
                            <p className="ContactInfoContent">Phone</p><br />
                            <p>9172377686</p>
                        </div>
                        <div className="ContactInfo">
                            <img
                                src="./assets/location.jpg"
                                alt="My LinkedIn profile"
                                className="icon"
                            />
                            <p className="ContactInfoContent">Address</p><br />
                            <p>Aurangabad</p>
                        </div>
                        <div className="ContactInfo">
                            <img
                                src="./assets/email.png"
                                alt="My LinkedIn profile"
                                className="icon"
                            />
                            <p className="ContactInfoContent">Email</p><br />
                            <p>syedzulkharnain334@gmail.com</p>
                        </div>
                        <button onClick={() => { window.dialog.close() }} aria-label="close" className="x">❌</button>
                    </dialog>

                </div>
                <div id="socials-container">
                    <img
                        src="./assets/linkedin.png"
                        alt="My LinkedIn profile"
                        className="icon"
                        onClick={() => { window.location.href = 'https://www.linkedin.com/in/syedzulkharnain/' }}
                    />

                    <img
                        src="./assets/github.png"
                        alt="My Github profile"
                        className="icon"
                        onClick={() => { window.location.href = 'https://github.com/Zulkharnai' }}
                    />
                </div>
            </div>
        </section >
    );
}

export default Profile;