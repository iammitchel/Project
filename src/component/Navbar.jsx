// import React, {useState} from 'react'
// import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
// import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
// import "./Navbar.css";
// import { IconContext } from 'react-icons';
// import SubMenu from "./SubMenu";
// // import Dropdown  from './Dropdown';

// const Navbar = () => {

//    const [sidebar, setSidebar] = useState(false);
//    const showSidebar = () => setSidebar(!sidebar);
//   return (
//     <>
//       <IconContext.Provider value={{ color: "#fff" }}>
//         <div className="navbar">
//           <Link>
//             <AiOutlineMenu onClick={showSidebar} />
//           </Link>
//         </div>
//         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//           <ul className="nav-menu-items" onClick={showSidebar}>
//             <li className="navbar-toggle">
//               <Link to="#" className="menu-bars">
//                 <AiOutlineCloseCircle />
//               </Link>
//             </li>
//             {SidebarData.map((item, index) => {
//               return <SubMenu item={item} key={index} />;
//             })}
//             {/* {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })} */}
//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default Navbar

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  /* background: #15171c; */
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavIcon1 = styled(Link)`
  margin-left: 30px;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  visibility: hidden;

  @media (max-width: 1200px) {
    visibility: visible;
    margin-left: 350px;
  }
  @media (max-width: 920px) {
    visibility: visible;
    margin-left: 280px;
  }
  @media (max-width: 620px) {
    visibility: visible;
    margin-left: 190px;
  }
  @media (max-width: 450px) {
    visibility: visible;
    margin-left: 135px;
  }
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon1 to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;