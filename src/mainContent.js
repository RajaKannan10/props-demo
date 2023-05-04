import React from 'react';
import Welcome from './welcome.png.png';
import './mainContent.css';


export default function MainContent(props) {
  return (
    <>
    <p className='paradesign'><b>Functionality:</b><br/><i>In this page, whenever we try to click on "Welcome to Dashboard" button, the "Number of Visitors" count will also increase accordingly". Also if you want to see the main content in dark or white mode, then just click on "Dark Mode" button alternatively. </i></p>
    <div className='vistors'>
        <img src ={Welcome} alt = "Welcome_img" className="imagedesign"/>
      <h2 >Number of Vistors</h2>
   
      <p className='clickdesign'>Clicked: {props.clicked}</p>
    
    </div >
    </>
  );
}
