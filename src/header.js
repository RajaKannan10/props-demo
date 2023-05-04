import React from 'react'


export default function Header(props) {
  return (
  
      
      <div className='design'>
      <button onClick={props.handleClick}className='big-button'>Welcome to Dashboard</button>
      <button onClick={props.toggleDarkMode}className='secondbutton'>Dark Mode</button>
      </div>
      
   
  );
}
