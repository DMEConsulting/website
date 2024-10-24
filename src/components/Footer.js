import React from 'react'; 
import Facebook from '../images/socialicons/Facebook.webp';
import Twitter from '../images/socialicons/Twitter.webp'; 
import Linkedin from '../images/socialicons/LinkedIN.webp';  
import logo from '../images/logo.jpeg';  

const Footer = () => {
  return (
    <footer class="footer">
  <div class="footer-content">
    <div class="footer-column footer-column_first mb-4">
      <div className='flex  items-center gap-4 '>
      <img src={logo} alt="Finance Consulting Logo" class="footer-logo"/> 
      <h3 className='font-bold'>DME Consultancy</h3>    </div>
      <ul class="footer-links">
        <li><a href="#home" className="hover:text-primary">Home</a></li>
        <li><a href="#services" className="hover:text-primary">Services</a></li>
        <li><a href="#about" className="hover:text-primary">About</a></li>
        <li><a href="#whyus" className="hover:text-primary">Why us</a> </li>
        <li><a href="#team" className="hover:text-primary">Our Team</a></li> 
      </ul>
    </div>
    
    <div class="footer-column footer-column_second"> 
      <ul class="footer-links mb-4">
        <li><a href="#">
        <img src={Linkedin} alt="LinkedIn" class="footer-icon"/></a></li>
        <li><a href="#">
        <img src={Twitter} alt="LinkedIn" class="footer-icon"/></a></li>
        <li><a href="#">
        <img src={Facebook} alt="LinkedIn" class="footer-icon"/></a></li>
      </ul>
      <p>hello@dmeconsultancy.com</p>
    </div>
  </div>
  <div class="footer-bottom mt-4">
    <p>&copy; 2024 DME Consultancy, All Rights Reserved</p>
  </div>
</footer>

  );
};

export default Footer;
