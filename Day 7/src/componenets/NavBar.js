import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/css/NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/pics/green-icon.png";
import { Button } from "reactstrap";
function NavBar() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
  };
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink
            exact
            to="/"
            className="nav-logo"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} alt="proj-title" />
            Harmony
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/ "
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                
              </NavLink>
            </li>
            <li>
              <Button
                className="log-out-red"
                exact
                to="/home"
                onClick={handleLogOut}
              >
                Login
              </Button>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <MenuIcon style={{ fontSize: "30px" }} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
