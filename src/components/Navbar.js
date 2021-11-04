import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  const paths = [
    { className: s.nav_link, to: "/", title: "Главная" },
    { className: s.nav_link_Notebook, to: "/Notebooks", title: "Notebooks" },
    { className: s.nav_link_Bicycles, to: "/Bicycles", title: "Bicycles" },
    { className: s.nav_link_Cameras, to: "/Cameras", title: "Cameras" },
    { className: s.nav_link_Refrigerators, to: "/Refrigerators", title: "Refrigerators" },
    { className: s.nav_link_WaterFilters, to: "/WaterFilters", title: "WaterFilters" },
  ];

  return (
    <nav className={s.navbar}>
      <div className={s.navbar_brand}>
        <h1>It's make sense</h1>
      </div>
      <ul className={s.navbar_nav}>
        {paths.map(({ title, ...e }) => (
          <li>
            <NavLink {...e}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
