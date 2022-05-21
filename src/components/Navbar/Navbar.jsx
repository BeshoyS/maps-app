import React from "react";
import {FaArrowLeft} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to={'/'} className="backBtn">
      <FaArrowLeft/>
      </Link>
    </header>
  );
};

export default Navbar;
