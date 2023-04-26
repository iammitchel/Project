import React from 'react'
import './Footer.css'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {

    const style = {
      color: "white",
      textDecoration: "none",
    };
  return (
    <div className="footer">
      <div
        className="contact"
        style={{
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "25px" }}>Ten Helping Hands</h1>
        <p style={{ color: "#fec006", width: "100%", marginBottom: "20px" }}>
          Dedicated to a better future
        </p>
        <div
          style={{
            color: "#fec006",
            display: "flex",
            justifyContent: "space-around",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          <BsFacebook />
          <BsInstagram />
          <BsLinkedin />
          <BsTwitter />
        </div>
      </div>
      {/* <div className="number">
        <h1>Contact Us</h1>
        <p>+2347031292497</p>
        <p>info@tenhelpinghands.com</p>
      </div> */}
      <div
        className="navigate"
        style={{
          backgroundColor: "#353535",
          color: "white",
          padding: "15px",
          width: "250px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ color: "#fec006", fontSize: "20px" }}>Navigation</h1>
        <Link style={style} to="/">
          <p>Home</p>
        </Link>
        <Link style={style} to="/about">
          <p>About Us</p>
        </Link>
        <Link style={style} to="/programs">
          <p>Programs</p>
        </Link>
        <Link style={style} to="/contact">
          <p>Contact Us</p>
        </Link>
      </div>

      <div
        className="contact-info"
        style={{
          backgroundColor: "#353535",
          color: "white",
          padding: "20px",
          width: "400px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ color: "#fec006", fontSize: "20px" }}>Contact Us</h1>
        <div style={{ padding: "5px" }}>
          <p>+2347031292497</p>
          <p>info@tenhelpinghands.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer