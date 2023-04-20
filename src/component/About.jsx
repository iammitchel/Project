import React from 'react'
import './About.css'
import Header from './Header';
import Consulting from './images/Consulting.jpg'
import { Tilt } from "react-tilt";
import Footer from "./Footer";


const About = () => {

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <>
      <div className="about">
        <div className="header" >
          <Header />
        </div>
        <div>
          <h1>About Us</h1>
        </div>
      </div>

      <div>
        <h1>Who we are</h1>
        <p>
          Ten Helping Hands is a non-governmental organization (NGO) based in
          Nigeria that focuses on child education, women and children
          empowerment, and healthcare subsidization. Our mission is to provide a
          better future for children and women in Nigeria by providing them with
          access to education and healthcare services. We believe that every
          child deserves a chance to succeed in life, regardless of their
          background or circumstances. That’s why we work hard to provide
          educational opportunities for children who might not otherwise have
          access to them. Our programs include scholarships for underprivileged
          children, vocational training for women, and healthcare subsidies for
          families who cannot afford medical care. We also work with local
          communities to provide clean water and sanitation facilities. At Ten
          Helping Hands, we believe that everyone has the power to make a
          difference in the world. By working together, we can create a brighter
          future for all Nigerians. Certainly!
        </p>
      </div>
      <div className="imgWrapper">
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Tilt
              options={defaultOptions}
              style={{
                height: 350,
                width: 350,
              }}
            >
              <img src={Consulting} alt="" />
            </Tilt>
          </div>
          <div>
            <h1>Grace Mbah</h1>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Founder
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About