import React from "react";
import "./Footer.css";
import footerImage from "../../assets/Body.png"; // adjust the path based on your project structure

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-heading">
          Join the Fun – Download <br /> MyBindle Now!
        </h2>
        <img src={footerImage} alt="MyBindle App" className="footer-image" />
      </div>
    </footer>
  );
};

export default Footer;
