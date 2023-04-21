import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import THH from './images/THH.jpeg'

const Header = () => {


  const style = {
    color:'white',
    textDecoration:'none'
  }
  return (
    <Container>
      <Left>
        <Link style={style} to="/">
          <img src={THH} alt="" />
        </Link>
      </Left>
      <Right>
        <Link style={style} to="/">
          <h2>Home</h2>
        </Link>
        <Link style={style} to="/about">
          <h2>About Us</h2>
        </Link>
        <Link style={style} to="/contact">
          <h2>Contact Us</h2>
        </Link>
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
    margin-left: 70%;
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

    @media screen and (max-width: 1500px) {
      margin-left: 63%;
    }
    @media screen and (max-width: 1200px) {
      h2{
        display:none;
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

 

