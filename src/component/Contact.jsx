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
          <h1 style={{ padding: "20px", fontSize: "35px" }}>
            Contact us to enquire as to how you can be a part of our
            initiatives and help towards improving the lives of African women
            and children
          </h1>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact