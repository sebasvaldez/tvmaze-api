import { Link } from "react-router-dom";
import "./Navbar.css";
import { HomeIcon, Login, SearchIcon } from "../Icons/Icons";
const Navbar = () => {
  return (
    <div className="navbar-class ">
      <div className="icons-home d-flex">
        <div>
          <Link to="/login">
            <Login />
          </Link>
        </div>
        <div className="mx-3">
          <Link to="/">
            <HomeIcon />
          </Link>
        </div>
        <div className="">
          <Link to="/movieslist">
            <SearchIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
