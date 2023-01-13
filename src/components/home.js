import React from 'react';
import backgroundimg from "../Media/backpic1.webp";
import "../stylesheets/home.css";
import { Link } from "react-router-dom";

const MyStyle = {
    backgroundImage: `url(${backgroundimg})`,
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  
  }
function home() {
  return (
    <div className="HomePage" style={MyStyle}>
      <div className='Container'>
        <div className='Hero'>
          <h1>BORN & RAISED IN CPT, SA. SELF TAUGHT. SOFTWARE DEV. </h1>
        </div>
        <div className='btn-container'>
        <Link to="/about">
            <button className='btn'>Learn more</button>
          </Link>
        </div>
          
        </div>
    </div>
  )
}

export default home