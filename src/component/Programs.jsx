import React from 'react'
import './Programs.css'
import Header from './Header';
import Footer from './Footer';
import Pimg from "./images/AA.jpg"

const Programs = () => {
  return (
    <>
      <div className="header">
        <Header />
        <div className="head">
          <img src={Pimg} alt="" />
            <h1 style={{ fontSize: 60 }}>Coming soon</h1>
        </div>
        {/* <div className="program">
          <h1>What we do</h1>
        </div>
        <div className="right">
          <h1 style={{ color: "#fec006", textAlign: "center" }}>
            Education
          </h1>
          <p style={{ color: "#fff", textAlign: "start" }}>
            • We believe that every child has the right to quality education and
            a bright future, regardless of their circumstances or location.{" "}
            <br />
            <br />
            • We partner with local communities, schools, government agencies
            and other stakeholders to provide access to learning opportunities,
            resources and support for children in need. <br />
            <br />
            • We work to improve the quality and relevance of education in
            Nigeria, by promoting child-friendly teaching methods, curriculum
            development, teacher training and school management. <br />
            <br />
          </p>
          <h1 style={{ color: "#fec006", textAlign: "center" }}>Healthcare</h1>
          <p
            style={{ color: "#fff", marginBottom: "30px", textAlign: "start" }}
          >
            • We believe that quality health care and a healthy life are the
            rights of every woman and child, no matter where they live or what
            their situation is. <br />
            <br />
            • We collaborate with local communities, health providers,
            government agencies and other partners to ensure that women and
            children have access to the health services, resources and support
            they need. <br />
            <br />
            • We strive to enhance the quality and relevance of health care in
            Nigeria, by supporting maternal and child health initiatives, such
            as antenatal care, skilled birth attendance, immunization, nutrition
            and family planning. <br />
            <br />
          </p>
        </div>
        </div> */}

        <Footer />
      </div>
    </>
  );
}

export default Programs