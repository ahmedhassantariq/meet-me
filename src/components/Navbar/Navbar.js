import React, {useState} from 'react';
import logo from '../../Assets/SVG/logo.svg';
import './navbar.css';

const Menu = () =>  (
  <>
  <p><a href="#home"> HOME </a></p>
  <p><a href="#blogs"> BLOGS </a></p>  
  <p><a href="#portfolio"> PORTFOLIO </a></p>
  <p><a href="#contact"> CONTACT </a></p>
</>
)



const Navbar = () => {
  

  return (<div className='navbar'>
            <img className='navbar_logo' src={logo} alt='logo'/>
            <div className='navbar_links'>
                <Menu/>
            </div>
            <div><a href='#contact'>
            <button className='navbar_button'>Business</button>
            </a>
            </div>

</div>
  )
}

export default Navbar;