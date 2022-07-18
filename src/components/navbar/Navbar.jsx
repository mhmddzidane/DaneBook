import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      sessionStorage.removeItem("user");
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">DaneBooking</span>
        </Link>
        {user ? (
          <div className="navItems">
            <button className="navButton">Halo {user.details.username}</button>

            <button className="navButton" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
