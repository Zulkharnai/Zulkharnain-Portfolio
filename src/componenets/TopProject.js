function TopProject() {
    return (
        <div style={{backgroundColor: 'rgba(8, 8, 8, 0.04)'}}>
            <section id="projects">
                <p className="section__text__p1">Browse My Recent</p>
                <h1 className="section-title">Projects</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        {/* Project 1 */}
                        <div className="details-container top-container color-container">
                            <div className="article-container">
                                <img
                                    src="./assets/VehicleLogo.png"
                                    alt="Vehicle Tracking Software"
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">Vehicle Tracking Software</h2>
                            <p className="project-description">
                                A software solution to monitor vehicle locations and manage fleet operations.
                            </p>
                        </div>

                        {/* Project 2 */}
                        <div className="details-container top-container color-container">
                            <div className="article-container">
                                <img
                                    src="./assets/AnimalApp.svg"
                                    alt="Animal Admin & Veterinary Application"
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">Animal Admin & Veterinary Application</h2>
                            <p className="project-description">
                                A platform for managing patients with roles like veterinarians, pet shops, medical staff, and delivery personnel for animal care
                            </p>
                        </div>

                        {/* Project 3 */}
                        <div className="details-container top-container color-container">
                            <div className="article-container">
                                <img
                                    src="./assets/DeeniyatLogo.png"
                                    alt="Deeniyat Application"
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">Deeniyat Application</h2>
                            <p className="project-description">
                                An app designed for religious education, offering courses and resources, while also facilitating community engagement and communication.
                            </p>
                        </div>

                        {/* Project 4 */}
                        <div className="details-container top-container color-container">
                            <div className="article-container">
                                <img
                                    src="./assets/logo_hr.png"
                                    alt="HR Management System"
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">E-commerce Website</h2>
                            <p className="project-description">
                                A robust platform for online shopping with seamless user experience.
                            </p>
                        </div>

                        {/* Project 5 */}
                        <div className="details-container top-container color-container">
                            <div className="article-container">
                                <img
                                    src="./assets/main-logo.svg"
                                    alt="E-commerce Website"
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">University Bookstore</h2>
                            <p className="project-description">
                                A comprehensive online bookstore platform for university students, offering textbooks, academic resources, and merchandise with a user-friendly shopping experience.
                            </p>

                        </div>

                        {/* Project 6 */}
                        <div className="details-container top-container color-container">
                            <div className="article-container">
                                <img
                                    src="./assets/igcLogo.png"
                                    alt="IGC Application"
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">IGC Foundation Application</h2>
                            <p className="project-description">
                                A specialized application designed for the IGC Foundation to manage and distribute essential goods like medical beds, supplies, and other aid items to those in need.
                            </p>

                        </div>
                    </div>

                </div>

            </section >
        </div >
    );
}

export default TopProject;