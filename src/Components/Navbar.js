import React from "react";
import { Link, withRouter } from 'react-router-dom';
import CCCimage from '../Images/CCCimage.png';

// import logo from '../Images/logo.jpg';

const Navbar = (props) => {
    const {countCartItems} =props;

    const Logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
    };

    
    return(
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
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                        <li><Link to="/cart">
                            Cart{' '}
                            {countCartItems ? (
                            <button class="badge">{countCartItems}</button>
                            ) : (' ')}
                        </Link>
                        </li>
                        <li><Link onClick={Logout} to="/login">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default withRouter(Navbar);

// countCartItems={cartItems.length}