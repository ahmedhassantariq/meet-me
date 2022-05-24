import React from 'react'
import AnimatedText from 'react-animated-text-content';

import './header.css';
import headerlogo from '../../Assets/PNG/Header_logo.png'
const Header = () => {
  return (
    <div className='header_container' id='home'>
      <div className='header_title_container'>
        <div className='header_title'>
        <AnimatedText className='animationss' children='ReactText' type='words' interval={0.04}  duration={0.4} animation={{ y: '100px', ease: 'ease', type:'float' }}>
        Hello!
        </AnimatedText>
        <AnimatedText className='animationss' children='ReactText' type='words' interval={0.04}  duration={0.} animation={{ y: '100px', ease: 'ease', type:'float' }}>
        I'm Ahmed Hassan
        </AnimatedText>
          <div className='header_button_div'>
          {/* <a className='header_attribute' href='#contact'> */}
          <button className='header_button'>MEET ME</button>
          {/* </a> */}
          </div>
          <p>Lorem ipsLorem ipsum dolor sit amet, consectetur adipiscing elit. 
          In sed sem et tortor rutrum venenatis. 
          Proin pretium massa a enim porttitor fringilla.</p>
        </div>
        
      </div>
      <div className='header_image_container'>
        <img className='header_hex' src={headerlogo} alt='header_logo'/>
      </div>

    </div>
  )
}

export default Header