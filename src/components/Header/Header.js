import React from 'react'
import './header.css';
import headerlogo from '../../Assets/PNG/Header_logo.png'
const Header = () => {
  return (
    <div className='header_container'>
      <div className='header_title_container'>
        <div className='header_title'>
          <h1>HEADING TAGLINE</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <button className='header_button'>MEET ME</button>
          <p>Lorem ipsLorem ipsum dolor sit amet, consectetur adipiscing elit. 
          In sed sem et tortor rutrum venenatis. 
          Proin pretium massa a enim porttitor fringilla.</p>
        </div>
        
      </div>
      <div className='header_image_container'>
        <img src={headerlogo} alt='header_logo'/>
      </div>

    </div>
  )
}

export default Header