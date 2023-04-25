import React, {useState, useEffect} from 'react'
import Header from './Header'
import  './BackgroundSlider.css'
import imageSlide from './data'
import Footer from "./Footer";
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 4) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    filter: "brightness(35%)",
  };
  return (
    <>
      <div className="container-style">
        <div style={bgImageStyle}> </div>
        <div className="header">
          <Header />
        </div>
        <div className="description">
          <h1 style={{ fontSize: 60, fontFamily: '"Fira Sans", Sans-serif' }}>
            Ten Helping Hands
          </h1>
          <p style={{ fontFamily: '"DM Sans", Sans-serif' }}>
            Contributing towards a better future
          </p>
        </div>
      </div>

      <div className="history" style={{ padding: 20 }}>
        <h1>About Ten Helping Hands</h1>
        <div className="THH">
          <p>
            THH is an African focused non-governmental organization devoted to
            enhancing the lives of disadvantaged women, children, and families
            via educational and medical programs. <br />
            <br />
            We consider access to decent education and medical care for all
            Africans, regardless of their socioeconomic situation, a fundamental
            human right.
          </p>
          <Link to="/about">
            <button
              style={{
                backgroundColor: "#fec006",
                color: "black",
                border: "none",
                padding: "15px",
              }}
            >
              Read more
            </button>
          </Link>
        </div>
      </div>

      <div className="programs">
        <h1> Focus Areas</h1>
        <p>
          We have two key focus areas from which we aim to contribute our quota
          towards a better Africa.
        </p>
        <div className="content">
          <div className="right">
            <h1 style={{ color: "#fec006" }}>Education </h1>

            <p>
              • We try to support the most vulnerable and marginalized children,
              who ordinarily will be unable to afford quality education. • We
              believe that every child has the right to quality education and a
              bright future, regardless of their circumstances or location.
              <br />
              <br />
              • We partner with local communities, schools, government agencies
              and other stakeholders to provide access to learning
              opportunities, resources and support for children in need. <br />
              <br />
              • We work to improve the quality and relevance of education in
              Nigeria, by promoting child-friendly teaching methods, curriculum
              development, teacher training and school management. <br />
              <br />
            </p>
            {/* <Link to="/programs">
              <button>Read more</button>
            </Link> */}
          </div>
          <div className="left">
            <h1 style={{ color: "#fec006" }}>Healthcare</h1>
            <p>
              • THH is dedicated to improving the health and well-being of women
              and children in Nigeria, especially those who are most in need and
              face the greatest challenges. • We believe that quality health
              care and a healthy life are the rights of every woman and child,
              no matter where they live or what their situation is. <br />
              <br />
              • We collaborate with local communities, health providers,
              government agencies and other partners to ensure that women and
              children have access to the health services, resources and support
              they need. <br />
              <br />
              • We strive to enhance the quality and relevance of health care in
              Nigeria, by supporting maternal and child health initiatives, such
              as antenatal care, skilled birth attendance, immunization,
              nutrition and family planning. <br />
              <br />
            </p>
            {/* <Link to="/programs">
              <button>Read more</button>
            </Link> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home