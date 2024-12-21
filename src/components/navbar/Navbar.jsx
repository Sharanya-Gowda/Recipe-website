import React, { useState } from 'react';
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const user=localStorage.getItem("user");

    const toggleMenu = () => {
        setShow(!show);
    };
    const setUser=()=>{
        localStorage.removeItem("user");
    }

    return (
        <nav className='navWrapper'>
            <div>
                <Link to="/">
                    <span>Recipe</span>
                </Link>
            </div>
            <div className={show ? 'linkWrapper show' : 'linkWrapper'}>
                <NavLink to="/" onClick={() => setShow(false)}>Home</NavLink>
                <NavLink onClick={()=>setUser}to="login">{user ? "Logout" : "Login" }</NavLink>
                <NavLink to="about" onClick={() => setShow(false)}>About</NavLink>
            </div>
            <div className='burgerMenu' onClick={toggleMenu}>&#9776;</div>
        </nav>
    );
};

export default Navbar;
