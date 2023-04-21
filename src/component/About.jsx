import React from 'react'
import './About.css'
import Header from './Header';
// import Consulting from './images/Consulting.jpg'
// import { Tilt } from "react-tilt";
import Footer from "./Footer";
import hands from './images/hands.jpg'
import { Link } from 'react-router-dom';


const About = () => {

  // const defaultOptions = {
  //   reverse: false, // reverse the tilt direction
  //   max: 35, // max tilt rotation (degrees)
  //   perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  //   scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  //   speed: 1000, // Speed of the enter/exit transition
  //   transition: true, // Set a transition on enter/exit.
  //   axis: null, // What axis should be disabled. Can be X or Y.
  //   reset: true, // If the tilt effect has to be reset on exit.
  //   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  // };
  return (
    <>
      <div className="about">
        <h1 style={{ color: "#353535",fontSize:'20px' }}>About us</h1>
        <div className="header">
          <Header />
          <div>
            <h1 style={{ marginTop: "200px" }}>About Us</h1>
          </div>
        </div>
      </div>

      <div className="WWA">
        <h1 style={{ marginLeft: "20%" }}>Who we are</h1>
        <p>
          Welcome to <b>tenhelpinghands</b>, a non-governmental organiztion
          based in Nigeria devoted to enhancing the lives of disadvantaged
          women, children, and families via educational and medical programs. We
          consider access to decent education and medical care for all children,
          regardless of their socioeconomic situation, a fundamental human
          right. <br />
          <br />
          In order to help children and women in need break the cycle of poverty
          and build brighter futures, it is our aim to give them access to
          healthcare and education. We put in a lot of effort to make sure that
          these at-risk groups may live healthy, productive lives and realize
          their full potential. <br />
          <br />
          Our primary focus is on education. We work to enroll as many children
          as possible in schools, especially in isolated and underserved areas
          where access is difficult. To pay for tuition, transportation, and
          other associated costs, we provide scholarships, financial aid, and
          support. Additionally, we collaborate with nearby schools to upgrade
          their facilities and make studying easier, such as by constructing
          classrooms, libraries, and computer laboratories. <br />
          <br />
          In addition to education, we acknowledge that healthcare plays a
          crucial part in enhancing the well-being of women and children. We
          give them access to fundamental medical services like immunizations,
          prenatal care, maternal health, and child nutrition plans. In order to
          give women and families the knowledge they need to make informed
          health decisions, we also run health awareness campaigns and offer
          training in family planning, nutrition, and cleanliness. <br />
          <br />
          A group of devoted and enthusiastic volunteers manages our
          organization, and they collaborate closely with schools, regional
          governments, other stakeholders, and local communities to make sure
          that our mission is carried out. To broaden our impact and be as
          effective as possible in meeting the requirements of our
          beneficiaries, we think it's important to create strong partnerships
          and collaborations. <br />
          <br />
          Transparency and accountability are values that{" "}
          <b>tenhelpinghands </b> uphold. Our programs are continuously reviewed
          and evaluated to make sure they are having a good effect on the
          children and women we assist. We work hard to make a significant
          difference in their lives. We value the support of our kind donors who
          support us in realizing our objectives and share our belief in the
          significance of donor interaction. <br />
          <br />
          Join us in our effort to provide all children and women in need with
          access to healthcare and education. We can build a better future for
          future generations by working together. Thank you for your support.
          <br />
          {/* Ten Helping Hands is a non-governmental organization (NGO) based in
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
          future for all Nigerians. Certainly! */}
        </p>
      </div>
      <div className="right">
        <h1 style={{ color: "#fec006" }}>Mission</h1>
        <p style={{ color: "#fff" }}>
          To improve the lives of women and children by providing educational
          opportunities and healthcare services that promote better health
          outcomes and a brighter future.
        </p>
        <h1 style={{ color: "#fec006" }}>Vision</h1>
        <p style={{ color: "#fff" }}>
          A worldwhere every child has access to quality education, and every
          woman and child has access to comprehensive healthcare. We strive to
          break the cycle of poverty and increase the overall well-being of
          communities by empowering children through education and promoting the
          health and well-being of women and children.
        </p>
      </div>
      {/* <div className="imgWrapper">
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
      </div> */}
      <div className="Pbtn">
        <img src={hands} alt="" />
        <h1>Check out our programs</h1>
        <Link to="/">
          <button>View programs</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default About