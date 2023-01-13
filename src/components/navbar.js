import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';
import AboutIMG from '../Media/about.png';
import HomeIMG from '../Media/home.png';


function navbar() {
  return (
    <div className='NavContainer'>
        <div className='Logo'>
          <h3>ACHMAT FORBES</h3>
        </div>
        <div className='NavLinks'>
            <div id='navs'>
            <Link to="/">
              <img src={HomeIMG} width="35px"/>
            </Link>
            </div>
            <div id='navs'>
            <Link to="/About">
              <img src={AboutIMG} width="35px"/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default navbar