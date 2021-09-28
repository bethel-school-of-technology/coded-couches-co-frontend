import React from "react";
import CCCimage from '../Images/CCCimage.png';
// import { Link } from 'react-router-dom';
// import logo from '../Images/logo.jpg';

const Navbar = (props) => {
    const {countCartItems} =props;

    const Logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    
    return(
        <header>
            <div className="navbar">
                <a href="/" >
                    <img  className="logo" src={CCCimage} alt="logo" />
                </a>

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
                        <li><a onClick={(href) => Logout(href="/login")}>Logout</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Navbar;

// countCartItems={cartItems.length}