import React from 'react'
import NavBar from '../componenets/NavBar.js';
import Profile from '../componenets/Profile.js';
import About from '../componenets/About.js';
import Skill from '../componenets/Skill.js';
import TopProject from '../componenets/TopProject.js';
import Contact from '../componenets/contact.js';
import Footer from '../componenets/footer.js';

function Home() {
    return (
        <div>
            <NavBar />
            <Profile />
            <About />
            <Skill />
            <TopProject />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home