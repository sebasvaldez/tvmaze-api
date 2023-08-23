import { Link } from "react-router-dom";
import "./Navbar.css";
import { HomeIcon, Login, SearchIcon } from "../Icons/Icons";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getUsers } from "../../../asyncMock";

import {Circles} from "react-loader-spinner";

const Navbar = () => {
  const navigate = useNavigate();
  const [iconSelected, setIconSelected] = useState("home");
  const { userLog, logOut, userData } = useAuth();
  const localStorage = window.localStorage;
  const userName = localStorage.getItem("user");

  const handleIconSelected = (iconName) => {
    setIconSelected(iconName);
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  console.log(userLog);
 
  return (
    <div className="navbar-class ">
      <div className="icons-home d-flex">
        {userName ? (
          <div className="d-flex align-items-center">
            <p className="m-0  text-white">Hola {userName}</p>
          </div>
        ) : (
          ""
        )}
        <div>
          {!userLog ? (
            <Link to={"/login"}>
              <Login
                onClick={() => {
                  handleIconSelected("login");
                }}
                color={iconSelected == "login" ? "#c48900" : "white"}
              />
            </Link>
          ) : (
            <div>
              <Button className="" onClick={handleLogOut}>
                logout
              </Button>
              { !userLog ? (<Circles />) : ("hola: "+ userData)}
            </div>
          )}
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
