import React from "react";
import * as IoIcons from "react-icons/io";



export const SidebarData = [
  {
    title: "Home",
    path: "/",
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    cName: "nav-text",
  },
  {
    title: "Programs",
    path: "#",
    cName: "nav-text",

    subNav: [
      {
        title: "2023/2024 Scholarship",
        path: "/programs",
        icon: <IoIcons.IoIosPaper />,
        cName: "dropdown-link",
      },
    ],
  },
  {
    title: "Challenges",
    path: "/challenges",
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    cName: "nav-text",
  },
];
