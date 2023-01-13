import React from 'react'
import backgroundimg from "../Media/backpic1.webp";
import avatar from "../Media/hacker.png";
import Qpic from "../Media/conversation.png";
import TechStackPic from "../Media/data-management.png";
import "../stylesheets/about.css";

const MyStyle = {
  backgroundImage: `url(${backgroundimg})`,
  height:'100vh',
  marginTop:'-70px',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

}

function about() {
  return (
    <div style={MyStyle}>
    <div className='AboutPageContainer'>
      <div className='card'> 
      <div className='card-img'>
        <img src={avatar} alt='card-img' id='pic1'/>
      </div>
      <div>
        <h3 className='title'>BIO</h3>
      </div>
      <div className='questions'>
        <ul id='lists'>
          <p>Hobbies: Football, Gaming, and obviously Coding!</p>
          <p>Interests: Sports, Technology, Music and Cars</p>
          <p>Favourite Quote: "When you're going through hell, keep going.</p>
        </ul>
      </div>
      </div>
      <div className='card'> 
      <div className='card-img'>
        <img src={Qpic} alt='card-img' id='pic2'/>
      </div>
      <div>
        <h3 className='title'>WHY DO I WANT TO BE A SOVTECH DEV?</h3>
      </div>
      <div className='questions'>
        <ul id='lists'>
          <p>SovTech is a well established company with experienced developers.</p>
          <p>They incorporate a mentorship programme within their internship!</p>
          <p>It is a brilliant opportunity to get hands on training and work experience.</p>
        </ul>
      </div>
      </div>
      <div className='card'> 
      <div className='card-img'>
        <img src={TechStackPic} alt='card-img' />
      </div>
      <div>
        <h3 className='title'>TECH STACK</h3>
      </div>
      <div className='questions'>
        <ul id='lists'>
          <p>HTML & CSS</p>
          <p>Programming Language: JavaScript</p>
          <p>Front End Librabry: React.JS</p>
        </ul>
      </div>
      </div>
    </div>
    </div>
  )
}

export default about