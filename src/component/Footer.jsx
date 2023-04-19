import React from 'react'
import './Footer.css'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div
        className="contact"
        style={{
          color: "white",
          marginTop: "25px",
        }}
      >
        <h1>Ten Helping Hands</h1>
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
      <div
        className="contact-info"
        style={{
          backgroundColor: "#353535",
          color: "white",
          padding: "35px",
          width: "200px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ color: "#fec006" }}>Contact Us</h1>
        <div style={{ padding: "5px" }}>
          <p>Phone Number</p>
          <p>Email Address</p>
        </div>
      </div>
    </div>
  );
}

export default Footer