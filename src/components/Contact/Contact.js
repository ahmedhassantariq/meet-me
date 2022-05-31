import React, {useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import './contact.css';
import pinlogo from '../../Assets/SVG/pinterest.svg';
import instalogo from '../../Assets/SVG/insta.svg';
import facebooklogo from '../../Assets/SVG/facebook.svg';
import twitterlogo from '../../Assets/SVG/twitter.svg';
// import whatslogo from '../../Assets/SVG/whats.svg';

import 'react-toastify/dist/ReactToastify.css';


init("fln28FJerLLlkswdw");

const Contact = () => {

  const form = useRef();
  const notifywait = () => toast("Sending Email.");
  const notifyyes = () => toast("Email Sent.");
  const notifyno = () => toast("Error Occured. Try Again!");
  const [btn, setbtn] = useState(true);
  const sendEmail = (e) => {
    e.preventDefault();
    notifywait();
    emailjs.sendForm('service_q6thjcy', 'template_pdjyzm8', form.current, 'fln28FJerLLlkswdw')
      .then((result) => {
          notifyyes();
          setbtn(false);
      }, (error) => {
        notifyno();
      });
  };
  return (
    <div className='contact_container' id='contact'>
        <div className='contact_titles'>
          <h1 className='contact_title_shadow'>CONTACT</h1>
          <h1 className='contact_title'>CONTACT</h1>
          <form className='contact_titles' ref={form} onSubmit={sendEmail}>
          <textarea placeholder='Enter email' type="email" name="user_email" className='contact-textfield_email'/>
          <textarea placeholder='Message here' name="message" className='contact-textfield_message'/>
          {btn ? (
            <button className='contact_button' type='submit'>Send</button> ):(
            <button disabled className='contact_button' type='submit'>Sent</button>
      )
      }
          
          <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
/>
          </form>
          <div className='contact-logo-container'>
          <a className='container_attribute' href="https://www.pinterest.com/ahmedhassan00" target="_blank" rel='noreferrer'><img src={pinlogo} alt='pinglogo'/></a>
          <a className='container_attribute' href="https://www.instagram.com/ahmedhassantariq/" target="_blank" rel='noreferrer' ><img src={instalogo} alt='instalogo'/></a>
          <a className='container_attribute' href="https://www.facebook.com/ahmedhassantariq00" target="_blank" rel='noreferrer'><img src={facebooklogo} alt='twitterlogo'/></a>
          <a className='container_attribute' href="https://twitter.com/ahmed_tariq00" target="_blank" rel='noreferrer'><img src={twitterlogo} alt='twitterlogo'/></a>
          {/* <a5 className='container_attribute' href="https://www.pinterest.com/ahmedhassan00" target="_blank" rel='noreferrer'><img src={whatslogo} alt='whatslogo'/></a5>          */}
        </div>
        <p>2022 © MeetAhmed. All rights reserved</p>
      </div>
    </div>
  )
}

export default Contact