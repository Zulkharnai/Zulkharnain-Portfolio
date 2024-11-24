import React from 'react'
import NavBar from '../componenets/NavBar.js';
import Profile from '../componenets/Profile.js';
import About from '../componenets/About.js';
import Skill from '../componenets/Skill.js';
import TopProject from '../componenets/TopProject.js';
import Contact from '../componenets/contact.js';
import Footer from '../componenets/footer.js';
import { Experience } from '../componenets/Experience.js';

function Home() {
    return (
        <div
            style={{
                height: "100vh",
                overflowY: "scroll", // Allows scrolling
                scrollbarWidth: "none", // Hides scrollbar in Firefox
            }}
        >
            <NavBar />
            <Profile />
            <About />
            <Skill />
            <Experience />
            <TopProject />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home