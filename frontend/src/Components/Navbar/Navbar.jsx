import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import nav_dropdown from "../Assets/nav_dropdown.png";
import { Link } from "react-router-dom";
import { ShopContext } from "./../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);
  const menuRef = useRef();

  // Function to toggle dropdown visibility
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  // Function to close dropdown when a menu item is clicked
  const closeDropdown = () => {
    menuRef.current.classList.remove("nav-menu-visible");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      {/* Dropdown icon visible only on smaller devices */}
      <img
        className="nav-dropdown-icon"
        src={nav_dropdown}
        alt="Dropdown"
        onClick={dropdown_toggle}
      />

      {/* Navigation menu */}
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
            closeDropdown();
          }}
          className={menu === "shop" ? "active" : ""}
        >
          <Link to="/" onClick={closeDropdown}>
            Shop
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("mens");
            closeDropdown();
          }}
          className={menu === "mens" ? "active" : ""}
        >
          <Link to="/mens" onClick={closeDropdown}>
            Men
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("womens");
            closeDropdown();
          }}
          className={menu === "womens" ? "active" : ""}
        >
          <Link to="/womens" onClick={closeDropdown}>
            Women
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
            closeDropdown();
          }}
          className={menu === "kids" ? "active" : ""}
        >
          <Link to="/kids" onClick={closeDropdown}>
            Kids
          </Link>
        </li>
      </ul>

      {/* Login and Cart section */}
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
