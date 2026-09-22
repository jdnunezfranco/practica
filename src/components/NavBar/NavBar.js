import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logo.png";
import "./Navbar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div>
        <NavLink exact to="/">
          <img
            id="logo"
            src={Logo}
            width="auto"
            height="auto"
            className="d-inline-block align-top"
            alt="Redux Blog"
          />
        </NavLink>
      </div>

      <h4>Bienvenidos a mi blog</h4>
      <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/filter/posts">Posts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
