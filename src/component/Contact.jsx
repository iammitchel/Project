import React from 'react'
import contactUs from "./images/Contact-Us.jpg";
import './Contact.css'
import Footer from "./Footer";
import Header from './Header';

const Contact = () => {
  return (
    <>
      <div className="header">
        <Header />
        <div className="wrapper">
          <img src={contactUs} alt="" />
        </div>
        <div className="text">
          <h1
            style={{
              padding: "20px",
              fontSize: "26px",
              fontWeight: "lighter",
              marginTop: "25px",
            }}
          >
            Contact us to enquire as to how you can be a part of our initiatives
            and help towards improving the lives of African women and children
          </h1>
        </div>
        <div
          className="contact-info"
          style={{
            backgroundColor: "#353535",
            color: "white",
            padding: "5px",
            width:'99%',
            borderRadius: "10px",
            marginBottom:'30px'
          }}
        >
          {/* <h1 style={{ color: "#fec006", fontSize: "25px" }}>Contact Us</h1> */}
          <div style={{ padding: "5px" }}>
            <p>+234 703 129 2497</p>
            <p style={{ marginTop: "20px", fontSize: "20px" }}>
              info@tenhelpinghands.com
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact