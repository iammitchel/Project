import React, {useState, useEffect} from 'react'
import Header from './Header'
import  './BackgroundSlider.css'
import imageSlide from './data'
import Footer from "./Footer";

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
          <div className='THH'>
          <p>
            Welcome to tenhelpinghands, a non-governmental organiztion based in
            Nigeria devoted to enhancing the lives of disadvantaged women,
            children, and families via educational and medical programs. We
            consider access to decent education and medical care for all
            children, regardless of their socioeconomic situation, a fundamental
            human right. In order to help children and women in need break the
            cycle of poverty and build brighter futures, it is our aim to give
            them access to healthcare and education. We put in a lot of effort
            to make sure that these at-risk groups may live healthy, productive
            lives and realize their full potential. Our primary focus is on
            education. We work to enroll as many children as possible in
            schools, especially in isolated and underserved areas where access
            is difficult. To pay for tuition, transportation, and other
            associated costs, we provide scholarships, financial aid, and
            support. Additionally, we collaborate with nearby schools to upgrade
            their facilities and make studying easier, such as by constructing
            classrooms, libraries, and computer laboratories. In addition to
            education, we acknowledge that healthcare plays a crucial part in
            enhancing the well-being of women and children. We give them access
            to fundamental medical services like immunizations, prenatal care,
            maternal health, and child nutrition plans. In order to give women
            and families the knowledge they need to make informed health
            decisions, we also run health awareness campaigns and offer training
            in family planning, nutrition, and cleanliness. A group of devoted
            and enthusiastic volunteers manages our organization, and they
            collaborate closely with schools, regional governments, other
            stakeholders, and local communities to make sure that our mission is
            carried out. To broaden our impact and be as effective as possible
            in meeting the requirements of our beneficiaries, we think it's
            important to create strong partnerships and collaborations.
            <span className={`long-text ${collapse3 ? "expanded" : ""}`}>
              Transparency and accountability are values that tenhelpinghands
              uphold. Our programs are continuously reviewed and evaluated to
              make sure they are having a good effect on the children and women
              we assist. We work hard to make a significant difference in their
              lives. We value the support of our kind donors who support us in
              realizing our objectives and share our belief in the significance
              of donor interaction. Join us in our effort to provide all
              children and women in need with access to healthcare and
              education. We can build a better future for future generations by
              working together. Thank you for your support. <br /> Mission: To
              improve the lives of women and children by providing educational
              opportunities and healthcare services that promote better health
              outcomes and a brighter future. Vision: A world where every child
              has access to quality education, and every woman and child has
              access to comprehensive healthcare. We strive to break the cycle
              of poverty and increase the overall well-being of communities by
              empowering children through education and promoting the health and
              well-being of women and children.
            </span>
            <button style={{
              backgroundColor:'black',
              color:'#fff'
            }} onClick={() => setCollapse3((prev) => !prev)} >
              Read more
            </button>
          </p>
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