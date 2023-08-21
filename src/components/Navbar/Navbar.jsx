import { Link } from "react-router-dom";
import "./Navbar.css";
import { HomeIcon, Login, SearchIcon } from "../Icons/Icons";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [iconSelected, setIconSelected] = useState("home");
  const { userLog, logOut,userData } = useAuth();
  const localStorage = window.localStorage;
  const navigate = useNavigate();

  const handleIconSelected = (iconName) => {
    setIconSelected(iconName);
  };

  const handleLogOut = () => {
    
    logOut();
    navigate("/");
  }


  console.log(userLog)
  console.log(userData)

  return (
    <div className="navbar-class ">
      <div className="icons-home d-flex">
        <div>
          {!userLog ? (
            <Link to="/login">
              <Login
                onClick={() => {
                  handleIconSelected("login");
                }}
                color={iconSelected == "login" ? "#c48900" : "white"}
              />
            </Link>
          ) : (
            <div>  |
            <button
              onClick={handleLogOut}
            >
              logout
            </button>
            <p></p>
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
