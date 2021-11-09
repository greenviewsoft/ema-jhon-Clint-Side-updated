import React from 'react';
import { Link, Router } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css';

const header = () => {
    return (
        <div className="header" > 
            <img className="logo" src={logo} alt="" />
            <nav>
            <a href="/" >Home</a>
                <a href="/shop" >Shop</a>
                <a href="/review" >Order review</a>
                <a href="/inventory" >Manage inventory</a>
            </nav>
        </div>
    );
};

export default header;