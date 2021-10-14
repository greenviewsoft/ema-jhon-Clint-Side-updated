import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const header = () => {
    return (
        <div className="header" > 
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shop" >Shop</a>
                <a href="/orders" >Order review</a>
                <a href="/inventory" >Manage inventory</a>
            </nav>
        </div>
    );
};

export default header;