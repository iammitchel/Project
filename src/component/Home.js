import React, {useState, useEffect} from 'react'
import Header from './Header'
import  './BackgroundSlider.css'
import imageSlide from './data'
import Footer from "./Footer";
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentState, setCurrentState] = useState(0);
  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);

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
          <h1 style={{ fontSize: 60 }}>Ten Helping Hands</h1>
          <p>Dedicated to a better Future</p>
        </div>
      </div>

      <div className="history" style={{ padding: 20 }}>
        <h1>About Ten Helping Hands</h1>
        <div className="THH">
          <p>
            Welcome to tenhelpinghands, a non-governmental organiztion based in
            Nigeria devoted to enhancing the lives of disadvantaged women,
            children, and families via educational and medical programs. We
            consider access to decent education and medical care for all
            children, regardless of their socioeconomic situation, a fundamental
            human right.
          </p>
          <Link to="/about">
            <button
              style={{
                backgroundColor: "#fec006",
                color: "black",
                border: "none",
                padding:'20px'
              }}
            >
              Read more
            </button>
          </Link>
        </div>
      </div>

      <div className="programs">
        <h1>Our Programs</h1>
        <p>
          Our main focus is providing basic needs for children- water, food,
          clothes, home, and education. See how we do it:
        </p>
        <div className="content">
          <div className="right">
            <h1 style={{ color: "#fec006" }}>Scholarships</h1>

            <p>
              Our scholarship program is designed to provide educational
              opportunities for underprivileged children in Nigeria. We offer
              scholarships for primary and secondary school students who might
              not otherwise have access to education.
              <span className={`long-text ${collapse ? "expanded" : ""}`}>
                Our scholarships cover tuition fees, textbooks, and other
                educational materials. We also provide mentorship and tutoring
                services to help students succeed in their studies. To be
                eligible for our scholarship program, students must meet certain
                criteria such as academic performance, financial need, and
                community involvement. We believe that education is the key to a
                better future for all Nigerians, and we’re committed to
                providing educational opportunities for children who might not
                otherwise have access to them.
              </span>
            </p>
            <button onClick={() => setCollapse((prev) => !prev)}>
              Read more
            </button>
          </div>
          <div className="left">
            <h1 style={{ color: "#fec006" }}>Healthcare</h1>
            <p>
              At Ten Helping Hands, we believe that access to healthcare is a
              fundamental human right. Unfortunately, many Nigerians living in
              rural areas do not have access to quality healthcare services.
              <span className={`long-text ${collapse2 ? "expanded" : ""}`}>
                According to Statista, in 2019, on average, healthcare made up
                six percent of Nigerian household spending, with higher figures
                in rural areas than in urban zones. This means that many
                Nigerians living in rural areas cannot afford quality healthcare
                services. We believe that everyone deserves access to quality
                healthcare, regardless of their financial situation. That’s why
                we work hard to provide healthcare subsidies for families who
                cannot afford medical care. Our healthcare programs include
                subsidies for medical treatment, prescription drugs, and medical
                supplies. We also work with local healthcare providers to ensure
                that our beneficiaries receive high-quality care.
              </span>
              <button onClick={() => setCollapse2((prev) => !prev)}>
                Read more
              </button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home