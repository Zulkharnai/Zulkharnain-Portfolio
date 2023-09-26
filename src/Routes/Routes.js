import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Home/Home';
import Blog from '../Blog/blog';


const WebRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
            </Routes>
        </Router>
    )
}

export default WebRoutes