import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

const NavBar = () => {

    return(
        <div className="nav-bar">
            <Link to='/'>
                <button className="nav-bar home">Home</button>
            </Link>
            <Link to='/gifts'>
                <button className="nav-bar gifts">Gifts</button>
            </Link>
            <Link to='/calendar'>
                <button className="nav-bar calendar">Calendar</button>
            </Link>
            <SearchBar />
        </div>
    )
}

export default NavBar;