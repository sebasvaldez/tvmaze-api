import { Link } from "react-router-dom";
import "./Navbar.css";
import { HomeIcon, Login, SearchIcon } from "../Icons/Icons";
import { useState } from "react";

const Navbar = () => {
  const [iconSelected, setIconSelected] = useState("home");

  const handleIconSelected = (iconName) => {
    setIconSelected(iconName);
  };

  return (
    <div className="navbar-class ">
      <div className="icons-home d-flex">
        <div>
          <Link to="/login">
            <Login
              onClick={() => {
                handleIconSelected("login");
              }}
              color={iconSelected == "login" ? "#c48900" : "white"}
            />
          </Link>
        </div>
        <div className="mx-3">
          <Link to="/">
            <HomeIcon
              onClick={() => {
                handleIconSelected("home");
              }}
              color={iconSelected == "home" ? "#c48900" : "white"}
            />
          </Link>
        </div>
        <div className="">
          <Link to="/movieslist">
            <SearchIcon
              onClick={() => {
                handleIconSelected("search");
              }}
              color={iconSelected == "search" ? "#c48900" : "white"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
