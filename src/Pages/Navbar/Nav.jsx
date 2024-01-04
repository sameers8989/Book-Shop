import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="nav_main p-3">
      <div className="nav d-flex justify-content-between me-5 ms-5">
        <div className="logo fw-bold fs-5">Books</div>
        <div className={`links ${showLinks ? "show" : "hide"}`}>
          <ul className="d-flex list-unstyled gap-3">
            <li>
              <Link to="/home" className="text-decoration-none text-dark">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/home" className="text-decoration-none text-dark">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-decoration-none text-dark">
                SHOP
              </Link>
            </li>
            <li>
              <Link
                to="/layout/upload"
                className="text-decoration-none text-dark"
              >
                SELL YOUR BOOKS
              </Link>
            </li>
            <li>
              <Link to="/home" className="text-decoration-none text-dark">
                BLOG
              </Link>
            </li>
          </ul>
        </div>
        <div className="icon" onClick={toggleLinks}>
          uuu
        </div>
      </div>
    </div>
  );
};

export default Nav;
