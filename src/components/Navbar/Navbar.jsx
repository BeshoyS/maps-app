import React, { useContext } from "react";
import {FaArrowLeft} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { CoordContext } from "../../context/CoordContext";

const Navbar = () => {
  const {setError} = useContext(CoordContext)
  return (
    <header className="navbar">
      <Link to={'/'} className="backBtn" onClick={()=> setError('')}>
      <FaArrowLeft/>
      </Link>
    </header>
  );
};

export default Navbar;
