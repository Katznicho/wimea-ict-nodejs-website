import React from 'react';
import ResearchComponent from './NavBarComponents/ResearchComponent';
import Downloads from './NavBarComponents/Download';
import AboutUs from './NavBarComponents/AboutUs';
import Collaboration from './NavBarComponents/Collaboration';
import FeedBack from './NavBarComponents/FeedBack';
import Gallery from './NavBarComponents/Gallery';
import './NavBar.css'

function NavBar() {
    return (
        <div className="navbar">
            <img
            className="navbar__logo"
            src="http://wimea.mak.ac.ug/wp-content/themes/masterstudy/assets/img/tmp/logo_transparent.png"
            alt="not found"
            ></img>
            <div className="navbar__components">
                <div className="navbar__component">
                    <ResearchComponent/>
                </div>
                <div className="navbar__component">
                    <Downloads/>
                </div>
                <div className="navbar__component">
                    <Gallery/>
                </div>
                <div className="navbar__component">
                    <Collaboration/>
                </div>
                <div className="navbar__component">
                    <FeedBack/>
                </div>
                <div className="navbar__component">
                    <AboutUs/>
                </div>
            </div>
            <img
            className="navbar__image"
            src="https://i.pinimg.com/564x/76/11/7e/76117e0b3d563077d8c84c748ad89835.jpg"
            alt="not found"
            ></img>
        </div>
    )
}

export default NavBar
