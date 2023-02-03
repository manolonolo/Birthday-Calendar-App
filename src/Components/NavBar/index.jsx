import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import './index.css';

const NavBar = () => {

    return(
        <div className="nav-bar">
            <Link to='/'>
                <button className="nav-bar-btn">Home</button>
            </Link>
            <Link to='/gifts'>
                <button className="nav-bar-btn">Gifts</button>
            </Link>
            <Link to='/calendar'>
                <button className="nav-bar-btn">Calendar</button>
            </Link>
            <SearchBar />
        </div>
    )
}

export default NavBar;