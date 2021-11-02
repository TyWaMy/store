import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"; 

const Navbar = () => (
  <nav className={s.navbar}>
    <div className={s.navbar_brand}>
      <h1>It's make sense</h1>
    </div>
    <ul className={s.navbar_nav}>
      <li>
        <NavLink className={s.nav_link} to="/" exact>
          Главная
        </NavLink>
      </li>
      <li>
        <NavLink className={s.nav_link} to="/PageNotebook">
          Notebook
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
