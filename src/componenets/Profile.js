function Profile() {
    return (
        // backgroundColor: 'rgba(8, 8, 8, 0.04)'
        <div style={{
            backgroundImage: "url('./assets/background-home.png')",
            backgroundSize: "cover", // Makes the image cover the entire container
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents tiling
            height: "100vh", // Full height of the viewport
            display: "flex", // Flexbox for alignment
            justifyContent: "center", // Centers content horizontally
            alignItems: "center", // Centers content vertically
            textAlign: "center", // Centers text inside the content
        }}>
            <section id="profile">
                <div className="section__pic-container">
                    <img src="./assets/ProfilePhoto.jpg" alt="Zulkharnain profile picture" />
                </div>
                <div className="section__text">
                    <p className="">Hello, I'm</p>
                    <h1 className="title">Syed Zulkharnain</h1>
                    <p className="section__text__p2">MERN Stack Developer</p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2"
                            onClick={() => {
                                window.open('/cv.pdf', '_blank');
                            }}
                        >
                            Download CV
                        </button>
                        <button className="btn btn-color-2" onClick={() => { window.dialog.showModal() }} >
                            Contact Info
                        </button>
                        {/* <button className="btn btn-color-1" onClick={() => { window.dialog.showModal() }} >
                            Contact Info
                        </button> */}

                        <dialog id="dialog">
                            <h2>Contact Info</h2>

                            <div className="ContactInfo">
                                <i className="fas fa-phone-alt icon" aria-hidden="true"></i>
                                <p className="ContactInfoContent">Phone</p><br />
                                <p>9172377686</p>
                            </div>
                            <div className="ContactInfo" >
                                <i className="fas fa-map-marker-alt icon" aria-hidden="true"></i>
                                <p className="ContactInfoContent" style={{ marginRight: '19vw' }}>Address</p><br />
                                <p>Aurangabad, Maharashtra, 431001</p>
                            </div>
                            <div className="ContactInfo">
                                <i className="fas fa-envelope icon" aria-hidden="true"></i>
                                <p className="ContactInfoContent">Email</p><br />
                                <p>syedzulkharnain334@gmail.com</p>
                            </div>
                            <div className="ContactInfo">
                                <i className="fab fa-linkedin icon" aria-hidden="true"></i>
                                <p className="ContactInfoContent">
                                    <a href="https://www.linkedin.com/in/syedzulkharnain" target="_blank" rel="noopener noreferrer">
                                        LinkedIn Profile
                                    </a>
                                </p>
                            </div>
                            <div className="ContactInfo">
                                <i className="fab fa-github icon" aria-hidden="true"></i>
                                <p className="ContactInfoContent">
                                    <a href="https://github.com/Zulkharnai" target="_blank" rel="noopener noreferrer">
                                        Github Profile
                                    </a>
                                </p>
                            </div>

                            <button onClick={() => { window.dialog.close() }} aria-label="close" className="x">❌</button>
                        </dialog>


                    </div>

                </div>
            </section >

        </div>
    );
}

export default Profile;