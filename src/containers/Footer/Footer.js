import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import './Footer.css';

const Footer = () => (
  <div className="app__footer" id="login">
    <div className="footer__copyright">
      <p className="p__opensans">Developer: <span>Sunny Kumar</span></p>
      <a href="https://www.linkedin.com/in/sunny-kumar-089669235"  rel="noopener noreferrer" target='_blank'><BsLinkedin id='linkedin'/></a>
    </div>

  </div>
);

export default Footer;