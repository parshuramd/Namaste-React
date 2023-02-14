import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header-compo">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/restaurant-food-house-logo-template_57516-341.jpg?w=2000"
        />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
