import React, { useState } from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import THH from './images/THH.jpeg'
// import { FaChevronDown } from "react-icons/fa";
import Dropdown  from './Dropdown';

const Header = () => {
  // const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };

    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };



  const style = {
    color:'white',
    textDecoration:'none'
  }
  return (
    <Container>
      <Left>
        <NavLink style={style} to="/">
          <img src={THH} alt="" />
        </NavLink>
      </Left>
      <Right>
        <NavLink style={style} to="/">
          <h2>Home</h2>
        </NavLink>
        <NavLink style={style} to="/about">
          <h2>About Us</h2>
        </NavLink>
        <div
          style={style}
          to="#"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <h2>
            Programs
            {/* <div><FaChevronDown /></div> */}
          </h2>
          {dropdown && <Dropdown />}
        </div>
        <NavLink style={style} to="/challenges">
          <h2>Challenges</h2>
        </NavLink>
        <NavLink style={style} to="/contact">
          <h2>Contact Us</h2>
        </NavLink>
        <Navbar />
      </Right>
    </Container>
  );
}

export default Header

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

`;

  export const Left = styled.div`
    cursor: pointer;
    color: aliceblue;
    position: absolute;
    z-index: 1;
    top: 5%;
    right: 90%;

    img {
      width: 50%;
      height: auto;
    }
    @media screen and (max-width: 800px) {
      right:80%;
      img{
        width: 60%;
        height:auto;
      }
    }
  `;

  export const Right = styled.div`
    display: flex;
    margin: 3px;
    position: absolute;
    z-index: 1;
    top: 2%;
    margin-left: 55%;
    font-family: "DM Sans", Sans-serif;
    font-size: 13px;
    h2 {
      width: 115px;
      height: 20px;
      padding: 15px;
      color: #fec006;
      cursor: pointer;
      transition: width 1s, height 1s;
    }

    h2:hover {
      background-color: #212121;
      color: #ffffff;
      padding: 15px;
      width: 115px;
      height: 30px;
    }

    a.active h2 {
      background-color: #fec006;
      color: #000000;
    }

    @media screen and (max-width: 1650px) {
      margin-left: 50%;
    }
    /* @media screen and (max-width: 1600px) {
      margin-left: 50%;
    } */

    @media screen and (max-width: 1500px) {
      margin-left: 45%;
    }
    @media screen and (max-width: 1300px) {
      margin-left: 38%;
    }
    @media screen and (max-width: 1200px) {
      margin-left: 58%;
      h2 {
        display: none;
      }
    }

    @media screen and (max-width: 1100px) {
      margin-left: 50%;
    }
    @media screen and (max-width: 1000px) {
      margin-left: 45%;
    }
    @media screen and (max-width: 800px) {
      h2 {
        margin-left: 30%;
        display: none;
      }
    }
  `;

 

