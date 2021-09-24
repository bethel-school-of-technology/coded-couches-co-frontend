import React from "react";
import { Link } from 'react-router-dom';
import logo from '../Images/logo.jpg';

const Navbar = (props) => {
    const {countCartItems} =props
    return(
        <header>
            <div class="navbar">
            
            <img class="logo" src={logo} alt="logo" />

                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">SignUp</a></li>
                        <li><a href="/cart">
                            Cart{' '}
                            {countCartItems ? (
                            <button class="badge">{countCartItems}</button>
                            ) : (' ')}
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Navbar;

// countCartItems={cartItems.length}