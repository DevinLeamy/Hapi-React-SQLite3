import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div className='navbar-container'>
            <Link to="" className='nav-item'>Home</Link>
            <Link to="/users" className='nav-item'>Users</Link>
        </div>
    );
}