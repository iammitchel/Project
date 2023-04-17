import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Header = () => {

  const style = {
    color:'white',
    textDecoration:'none'
  }
  return (
    <Container>
      <Left>
        <Link style={style} to="/">
          <h1>LOGO</h1>
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
    z-index: 999;
    top: 2%;
    margin-left: 2%;
  `;

  export const Right = styled.div`
    display: flex;
    margin: 3px;
    position: absolute;
    z-index: 999;
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
  `;

 

