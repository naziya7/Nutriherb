/* eslint-disable */


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <FontAwesomeIcon icon={['fas', 'faUser']} />
          <h3>
           Nutriherb
            <i>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </i>
          </h3>
          <p>
            By JB Food Processing
          </p>
          <p>Ashpak patel (Founder)
            At.Po.Gajawadi,Satara-415013</p>
           
        
         
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +91 9527331020
          </a>
          {/* <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +91 9527331020
          </a> */}
          <a href="/" className="links" id="emailLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            
jbfoodsprocessing@gmail.com
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </i>
           Satara, Maharashtra, India
          </a>
        </div>
        <div className="box">
          <h3>quick info</h3>
          <a href="#home" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            home
          </a>
          <a href="#features" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            features
          </a>
          <a href="#products" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            products
          </a>
          <a href="#categories" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            categories
          </a>
          <a href="#blogs" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            blogs
          </a>
        </div>
        <div className="box">
          <h3>newsletter</h3>
          <p>Subscribe For Latest Updates</p>
          <input type="text" placeholder="your email" />
          <button type="button" className="btn">
            subscribe
          </button>
          <img src="image/payment.png" alt="" />
        </div>
      </div>
     
    </footer>
  );
}
