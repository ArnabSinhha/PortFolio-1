import React , { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zffdp8v', 'template_nlwwwhh', form.current, 'ObLFIK2Mr_vWuDeM4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  

  return (
    <section className="contact">
        <h2 className="header">Contact Me</h2>
        <span className="ContactDesc">Please fill the form below to discuss any work oppertunity </span>
        
        <form action="" className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='Your name' className='contactFeild' name="user_name"></input>
          <input type='text' placeholder='Your email' className='contactFeild'  name="user_email"></input>
          <textarea name="message" placeholder='Your Message' rows="5"className='contactFeild' ></textarea>
          <button type="submit" value='send' className='contactBtn'>Submit</button>
        </form>
    </section>
  )
}

export default Contact 
