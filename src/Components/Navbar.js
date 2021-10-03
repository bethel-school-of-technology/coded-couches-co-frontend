import React from "react";
import { Link, withRouter } from 'react-router-dom';
import CCCimage from '../Images/CCCimage.png';

const Navbar = () => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartCount = cart.length;

    // Logs user out by clearing all keys from local storage
    const Logout = () => {
        localStorage.clear();
    };

    const LoggedIn = () => {
        const userData = JSON.parse(localStorage.getItem("user"));
        return (
            <header>
            <div className="navbar">
                <Link to="/" >
                    <img  className="logo" src={CCCimage} alt="logo" />
                </Link>
                
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/shop">Shop</Link></li>                        
                        <li><Link to="/cart">
                            Cart{' '}
                            <button className="cart-button">{cartCount}</button>
                        </Link></li>
                    
                    {!userData ?  (
                            <>
                                <li><Link to="/signup">SignUp</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </>
                        ): 
                            <>
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link onClick={Logout} to="/login">Logout</Link></li>
                                <div className="headingSuperSmall">
                                    Welcome {userData.username}!
                                </div>
                            </>
                    }                        
                    </ul>
                </nav>
            </div>
        </header>
        )
    }
    
    return(
        <LoggedIn />
    );
};
export default withRouter(Navbar);