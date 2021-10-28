import React,{Fragment} from "react";
import { NavLink } from "react-router-dom"; 

export const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand"><h1>It's make sense</h1></div>
    <ul className="navbar-nav">
      <li>
        <NavLink className="nav-link" to="/" exact>
          Главная
        </NavLink>
        </li>
        <li>
        <NavLink className="nav-link" to="/PageNotebook">
          Notebook
        </NavLink>
      </li>
    </ul>
  </nav>
);
