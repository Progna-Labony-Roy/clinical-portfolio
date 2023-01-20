import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer text-color">
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
        <div className="two">
          <h6 className="footer-title">Quick Links</h6>
          <p className="footer-text">Book Session</p>
          <p className="footer-text">About Me</p>
          <p className="footer-text">Contact Us</p>
        </div>
        <div className="three">
          <h6 className="footer-title">Legal Stuff</h6>
          <p className="footer-text">Disclaimer</p>
          <p className="footer-text">Privacy Policy</p>
          <p className="footer-text">Terms of Services</p>
        </div>
      </div>
      <h6 className="copyright">All rights reserved</h6>
    </div>
  );
};

export default Footer;
