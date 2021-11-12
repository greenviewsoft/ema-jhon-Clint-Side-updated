import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css';

const header = () => {
    return (
        <div className="header" > 
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/shop" >Shop</NavLink>
                <NavLink to="/review" >Order review</NavLink>
                <NavLink to="/inventory" >Manage inventory</NavLink>
            </nav>
        </div>
    );
};

export default header;