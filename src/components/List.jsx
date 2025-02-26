import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/computerLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function List() {
  return (
    <header>
      <div className="container container-flex">
        {/* Logo */}
        <div className="logoContainer">
          <img src={logo} className="logo" alt="logo" />
        </div>

        <nav>
          <div className="list">
            <NavLink
              exact
              to="/"
              className="listItem"
              activeClassName="activeItem"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="listItem"
              activeClassName="activeItem"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="listItem"
              activeClassName="activeItem"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="listItem"
              activeClassName="activeItem"
            >
              Contact
            </NavLink>
            <NavLink
              to="/policy"
              className="listItem"
              activeClassName="activeItem"
            >
              Policy
            </NavLink>
          </div>
        </nav>

        {/* Iconos */}
        <div className="icons">
          <SearchIcon className="icon" />
          <PersonIcon className="icon" />
          <LocalPhoneIcon className="icon" />
        </div>
      </div>
    </header>
  );
}

export default List;
