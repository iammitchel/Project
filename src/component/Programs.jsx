import React from 'react'
import './Programs.css'
import Header from './Header';
import Footer from './Footer';
import Pimg from "./images/AA.jpg"
import picture1 from "./img/Picture1.png"
import picture2 from "./img/Picture2.png"
import picture3 from "./img/Picture3.png"
import picture4 from "./img/Picture4.png"
import picture5 from "./img/Picture5.png"
import picture6 from "./img/Picture6.png";
import picture7 from "./img/Picture7.png";
import picture8 from "./img/Picture8.png";
import picture9 from "./img/Picture9.png";
import picture10 from "./img/Picture10.png";
import picture11 from "./img/Picture11.png";
import picture12 from "./img/Picture12.png";
import picture13 from "./img/Picture13.png";
import picture14 from "./img/Picture14.png";
import picture15 from "./img/Picture15.png";
import picture16 from "./img/Picture16.png";
import picture17 from "./img/Picture17.png";
import picture18 from "./img/Picture18.png";
import picture19 from "./img/Picture19.png";
import picture20 from "./img/Picture20.png";
import picture21 from "./img/Picture21.png";


const Programs = () => {
  return (
    <>
      <div className="header">
        <Header />
        <div className="head">
          <img src={picture2} alt="" />
          <div className="P-content">
            <h2>
              TEN KIND HANDS <br />
              <br />
              2023_2024 Scholarship program <br />
              <br />
              September 2023
            </h2>
          </div>
        </div>
        <section
          style={{
            backgroundColor: "#353535",
            color: "#fff",
            padding: "1px",
            paddingBottom: "20px",
          }}
        >
          <h1>Ten Kind Hands Website</h1>
          <div className="TKH">
            <ul>
              <li>
                We are an NGO dedicated to the enhancing the lives of
                disadvantaged women, children, and families via educational and
                medical programs.
              </li>
              <li>
                Our activities contribute towards solving the following SDGs:
              </li>
              <li>
                <b>SDG 4:</b> Ensuring inclusive and equitable quality education
                & promote lifelong learning opportunities for all
              </li>
              <li>
                <b>SDG 3:</b> Ensuring health and well-being for all
              </li>
            </ul>
          </div>
          <div className="THK-img">
            <img src={picture1} alt="" />
            <img src={picture3} alt="" />
            <img src={picture4} alt="" />
          </div>
        </section>

        <section className="scholar">
          <h1>2023 / 2024 scholarship program</h1>
          <div className='scholar1'>
            <div className="scopro">
              <div className="program">
                <div className="program-details">
                  <h2>10</h2>
                  <p>Full tuition scholarship recipients awarded</p>
                </div>
                <div className="program-details">
                  <h2>2</h2>
                  <p>
                    Scholarship types <br />- Merit scholarships <br />-
                    Need-based scholarships
                  </p>
                </div>
                <div className="program-details">
                  <h2>65%</h2>
                  <p>Female recipients based entirely on merit</p>
                </div>
              </div>
            </div>

            <div
              style={{
                marginRight: "80px",
                marginBottom: "20px",
              }}
            >
              <img src={picture5} alt="" />
            </div>
          </div>
        </section>

        <section>
          <h1>2023 / 2024 scholarship recipients</h1>
          <div className="scholarRep">
            <div>
              <h2>Tanya Chika</h2>
              <img src={picture6} alt="" />
              <p>
                Merit based scholarship as the best performing student in her
                class for the previous session
              </p>
            </div>
            <div>
              <h2>Adiel Agbo</h2>
              <img src={picture7} alt="" />
              <p>
                Merit based scholarship as the best performing student in her
                class for the previous session
              </p>
            </div>
            <div>
              <h2>Eliora Chika</h2>
              <img src={picture8} alt="" />
              <p>
                Merit based scholarship as the best performing student in her
                class for the previous session
              </p>
            </div>
            <div>
              <h2>Simeon Yohanna</h2>
              <img src={picture9} alt="" />
              <p>
                Merit based scholarship as the best performing student in his
                class for the previous session
              </p>
            </div>
          </div>
          <div className="scholarRep2">
            <div>
              <h2>Joshua Madaki</h2>
              <img src={picture10} alt="" />
              <p>
                Merit based scholarship as the best performing student in her
                class for the previous session
              </p>
            </div>
            <div>
              <h2>Eleojo Othniel</h2>
              <img src={picture11} alt="" />
              <p>
                Merit based scholarship as the best performing student in her
                class for the previous session
              </p>
            </div>
            <div>
              <h2>Evelyn Ojone</h2>
              <img src={picture12} alt="" />
              <p>
                Merit based scholarship as the best performing student in her
                class for the previous session
              </p>
            </div>
            <div>
              <h2>Favour Tersoo</h2>
              <img src={picture13} alt="" />
              <p>
                Merit based scholarship as the best performing student in her
                class for the previous session
              </p>
            </div>
          </div>
          <div className="scholarRep3">
            <div className='normal'>
              <img src={picture14} alt="" />
              <img src={picture15} alt="" />
              <img src={picture16} alt="" />
              <img src={picture17} alt="" />
              <img src={picture2} style={{ width: "380px" }} alt="" />
              <br />
              <div className='none'>
              <img src={picture18} style={{ height: "340px" }} alt="" />
              <img src={picture19} alt="" />
              <img src={picture20} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id='thanks'>
          <h1>THANK YOU</h1>
          <div className='info'>
          <div className='info1'>
            <h2>Contact Us</h2>
            <ul>
              <li>https://tenhelpinghands.com/</li>
              <li>+234 703 129 2497</li>
              <li>info@tenhelpinghands.com​</li>
            </ul>
          </div>
          <div>
            <img src={picture21}  alt="" />
          </div>
          </div>
        </section>
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