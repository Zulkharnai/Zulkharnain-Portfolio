function TopProject() {
    return (
        <div>
            <section id="projects">
                <p className="section__text__p1">Browse My Recent</p>
                <h1 className="title">Projects</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        <div className="details-container color-container" style={{
                            margin: 'auto',
                            marginTop: '0px'
                        }}>
                            <div className="article-container">
                                <img
                                    src="./assets/e-muallim.jpg"
                                    alt="Project 1"
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">E-learning platform (Web App)
                            </h2>
                            <div className="btn-container">
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={() => { window.location.href = 'https://github.com/Zulkharnai/E-muallim' }}
                                >
                                    Github
                                </button>
                                <button
                                    className="btn btn-color-2 project-btn"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                        <div className="details-container color-container">
                            <div className="article-container">
                                <img
                                    src="./assets/pushpak.jpg"
                                    alt="Project 2"
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">ERP Software (Desktop Application)</h2>
                            <div className="btn-container">
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={() => { window.location.href = 'https://github.com/Zulkharnai/pushpak_backend' }}
                                >
                                    Github
                                </button>
                                <button
                                    className="btn btn-color-2 project-btn"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </div >
    );
}

export default TopProject;