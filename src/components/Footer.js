import React from 'react'; 
import Facebook from '../images/socialicons/Facebook.webp';
import Twitter from '../images/socialicons/Twitter.webp'; 
import Linkedin from '../images/socialicons/LinkedIN.webp';  

const Footer = () => {
  return (
    <footer class="footer">
  <div class="footer-content">
    <div class="footer-column footer-column_first mb-4">
      <div className='flex  items-center gap-4 '>
      <img src="Capture.png" alt="Finance Consulting Logo" class="footer-logo"/> 
      <h2 className='font-bold'>DME Consulting</h2>    </div>
      <ul class="footer-links">
        <li><a href="#">Our Services</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
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
      <p>hello@dmeconsulting.com</p>
    </div>
  </div>
  <div class="footer-bottom mt-4">
    <p>&copy; 2024 DME Consulting, All Rights Reserved</p>
  </div>
</footer>

  );
};

export default Footer;
