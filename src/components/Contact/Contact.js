import React from 'react'
import './contact.css';
import pinlogo from '../../Assets/SVG/pinterest.svg';
import instalogo from '../../Assets/SVG/insta.svg';
import facebooklogo from '../../Assets/SVG/facebook.svg';
import twitterlogo from '../../Assets/SVG/twitter.svg';
import whatslogo from '../../Assets/SVG/whats.svg';
const Contact = () => {
  return (
    <div className='contact_container' id='contact'>
        <div className='contact_titles'>
          <h1 className='contact_title_shadow'>CONTACT</h1>
          <h1 className='contact_title'>CONTACT</h1>
          <textarea placeholder='Email' id='Email' className='contact-textfield_email'/>
          <textarea placeholder='Message' id='message' className='contact-textfield_message'/>
          <button className='contact_button'>Send</button>
          <div className='contact-logo-container'>
          <a className='container_attribute' href="https://www.pinterest.com/ahmedhassan00" target="_blank" rel='noreferrer'><img src={pinlogo} alt='pinglogo'/></a>
          <a className='container_attribute' href="https://www.instagram.com/ahmedhassantariq/" target="_blank" rel='noreferrer' ><img src={instalogo} alt='instalogo'/></a>
          <a className='container_attribute' href="https://www.facebook.com/ahmedhassantariq00" target="_blank" rel='noreferrer'><img src={facebooklogo} alt='twitterlogo'/></a>
          <a className='container_attribute' href="https://twitter.com/ahmed_tariq00" target="_blank" rel='noreferrer'><img src={twitterlogo} alt='twitterlogo'/></a>
          {/* <a5 className='container_attribute' href="https://www.pinterest.com/ahmedhassan00" target="_blank" rel='noreferrer'><img src={whatslogo} alt='whatslogo'/></a5>          */}
        </div>
        <p>2022©ahmedhassantariq.com.All rights reserved</p>
      </div>
    </div>
  )
}

export default Contact