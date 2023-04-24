import React from 'react'
import './Programs.css'
import Header from './Header';
import Footer from './Footer';
import Pimg from "./images/programs.jpg"

const Programs = () => {
  return (
    <>
      <div className="header">
        <Header />
        <div className="head">
          <img src={Pimg} alt="" />
            <h1 style={{ fontSize: 60 }}>Programs</h1>
        </div>
        <div className="program">
          <h1>What we do</h1>
        </div>
        <div className="right">
          <h1 style={{ color: "#fec006", textAlign: "center" }}>
            Education Initiatives
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

        <div>
          <h1 style={{ textAlign: "center" }}>Challenges</h1>
          <div className="right">
            <h1 style={{ color: "#fec006", textAlign: "center" }}>Education</h1>
            <p style={{ color: "#fff", textAlign: "start" }}>
              • According to a UNICEF report from 2020, Nigeria has the highest
              number of out-of-school children in the world, with an estimated
              10.5 million children aged 5-14 not attending school. <br />
              <br />
              • This represents about one in every five children of primary
              school age in Nigeria. <br />
              <br />
              • The problem is particularly acute in the northern states of
              Nigeria, where poverty, conflict, and cultural factors have
              contributed to low enrollment rates and high dropout rates. <br />
              <br />
              • In some states, such as Sokoto, Yobe, and Zamfara, over 60% of
              primary school-age children are not enrolled in school. <br />
              <br />
              • Girls are disproportionately affected by the problem, with
              higher dropout rates and lower enrollment rates than boys. This is
              often due to cultural factors that prioritize boys' education over
              girls' education. <br />
              <br />
              • Children with disabilities are also more likely to be out of
              school, due to a lack of accessible infrastructure and trained
              teachers. <br />
              <br />• The COVID-19 pandemic has exacerbated the problem of
              out-of-school children in Nigeria, with school closures and
              economic hardship leading to increased dropout rates and decreased
              enrollment rates. <br />
              <br />
              • The Nigerian government has made efforts to address the problem,
              including the implementation of policies such as the Universal
              Basic Education Act and the establishment of programs such as the
              Girls' Education Project. However, progress has been slow and
              uneven, and more needs to be done to ensure that all children in
              Nigeria have access to quality education. <br />
              <br />
            </p>
            <h1 style={{ color: "#fec006", textAlign: "center" }}>
              Healthcare
            </h1>
            <p
              style={{
                color: "#fff",
                marginBottom: "30px",
                textAlign: "start",
              }}
            >
              • Maternal mortality rates in Nigeria are among the highest in the
              world, with an estimated 512 deaths per 100,000 live births in
              2018, according to the World Bank. <br />
              <br />
              • This is partly due to a lack of access to skilled healthcare
              professionals during childbirth, as well as inadequate healthcare
              infrastructure and resources.
              <br />
              <br />
              • Nigeria also has one of the highest under-five mortality rates
              in the world, with an estimated 117 deaths per 1,000 live births
              in 2020, according to UNICEF. <br />
              <br />
              • The leading causes of under-five mortality in Nigeria include
              malaria, pneumonia, diarrhoea, and malnutrition, many of which are
              preventable or treatable with access to basic healthcare. <br />
              <br />
              • Women and children in rural areas are particularly affected by a
              lack of access to healthcare, due to factors such as poverty,
              limited healthcare infrastructure, and cultural barriers to
              seeking healthcare services. <br />
              <br />
              • In some areas, there is a shortage of trained healthcare
              professionals, with an estimated 5 doctors and 22 nurses and
              midwives per 10,000 people in Nigeria, according to the World
              Health Organization. <br />
              <br />
              • The COVID-19 pandemic has further strained Nigeria's healthcare
              system, with disruptions to healthcare services and increased
              demand for healthcare resources. <br />
              <br />
              • The Nigerian government has made efforts to improve healthcare
              access, such as the National Health Insurance Scheme and the
              Primary Healthcare Under One Roof policy. However, there is still
              much work to be done to ensure that all women and children in
              Nigeria have access to quality healthcare services. <br />
              <br />
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Programs