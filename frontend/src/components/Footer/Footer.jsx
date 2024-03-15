import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram from "../Assets/instagram_icon.png";
import Pintrest_icon from "../Assets/pintester_icon.png";
import whatsapp_icons from "../Assets/whatsapp_icon.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="logo" />
        <p>VintageVisage.pk</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socail-icons">
        <div className="footer-icons-container">
          <img src={instagram} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={Pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icons} alt="" />
        </div>
      </div>
      <div className="footer-copywrite">
        <hr />
        <p className="">Copyright @ 2023 All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
