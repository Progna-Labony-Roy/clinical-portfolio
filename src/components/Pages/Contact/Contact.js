import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_h8blw8w",
        "template_mka0hfl",
        form.current,
        "AtXX8i6MtucT3D9P1"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Email has sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact'>
        <div className="one">
          <div>
            <p className="name">Sayesta Goswami, PhD </p>
            <p className="tiny-text">CLINICAL PSYCHOLOGIST</p>
          </div>
          <div className="address">
          <i class="footer-icon fa-solid fa-location-dot"></i>
            <div>
              <p className="footer-text">Anchal Tower, Sixmile, </p>
              <p className="footer-text"> Guwahati, Assam 781022, India</p>
            </div>
          </div>
          <div className="address">
          <i class="footer-icon fa-solid fa-phone"></i>
            <p className="footer-text">+918333552221</p>
          </div>
          <div className="address">
          <i class="footer-icon fa-solid fa-envelope"></i>
            <p className="footer-text">sayestagoswami.pt@gmail.com</p>
          </div>
        </div>
      <div className='contact-form'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className='submit-button' type="submit" value="Send" />
    </form>
  </div>
    </div>
 
  );
};

export default Contact;