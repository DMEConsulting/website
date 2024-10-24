
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';


export default function Contactus(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('There was an error sending the email:', error.text);
          alert('Failed to send the message. Please try again later.');
        }
      );

    e.target.reset(); // Reset form after submission
  };


    return(
        <section id="contactus" className="contact-us-section">
  <div className="contact-prompt">
    <h2 className="mtext-black">We’d love to hear from you!</h2>
    <p className="montserrat-paragraph montserrat-paragraph">
       Whether you have a question or need assistance, feel free to fill out the form, and we’ll get back to you as soon as possible.
    </p>
  </div>
  <div className="contact-form montserrat-paragraph">
    <form onSubmit={sendEmail} enctype="text/plain">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
      </div>
      <button type="submit" className="primary-btn montserrat-paragraph">Send Message</button>
    </form>
  </div>
</section>

    )
}