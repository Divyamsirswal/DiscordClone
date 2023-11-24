// NavBar.jsx
import React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="logo">Join Us</div>
      <div className="search-container">
        <input className="nav-items" type="text" placeholder="Search" />
        <Button variant="contained" className="search">
          <SearchIcon />
          Search
        </Button>
      </div>
      <div className="nav-buttons">
        <Button variant="text" className="nav-button">
          Food
        </Button>
        <Button variant="text" className="nav-button">
          Tech
        </Button>
        <Button variant="text" className="nav-button">
          Comedy
        </Button>
        <Button variant="contained" className="cta-button">
          Join Now
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
