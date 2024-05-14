import React from "react";
import "./footer.scss";
import send from "../../../assets/send.svg";
import qr from "../../../assets/qr.svg";
import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";
import linkledin from "../../../assets/linkledin.svg";



const Footer = () => {
  return (
    <footer>
      <div className="container footer df">
        <div className="footer__logo">
          <h2 style={{ color: "white" }}>Exclusive</h2>
          <h3 style={{ color: "white" }}>Subscribe</h3>
          <a cl style={{ color: "white" }} href="#">
            Get 10% off your first order
          </a>
          <form action="" className="form">
            <input placeholder="Enter your email" type="email" />
            <img src={send} alt="" />
          </form>
        </div>
        <ul className="footer__list">
          <h3>Support</h3>
          <a href="#">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a>
          <a href="exclusive@gmail.com">exclusive@gmail.com</a>
          <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
        </ul>
        <ul>
          <h3>Account</h3>
          <a href="#">My account</a>
          <a href="exclusive@gmail.com">exclusive@gmail.com</a>
          <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
        </ul>
        <ul>
          <h3>Quick Link</h3>
          <a href="#">Privacy Policy</a>
          <a href="exclusive@gmail.com">exclusive@gmail.com</a>
          <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
        </ul>
        <ul>
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <img src={qr} alt="" />
          <div className="socials">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={linkledin} alt="" />
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
