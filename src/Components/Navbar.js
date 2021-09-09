import React from "react";
import { Link } from 'react-router-dom';
import logo from '../Images/logo.jpg';

const Navbar = (props) => {
    const {countCartItems} = props;
    return(
        <div className="navbar">
            <nav>
           
              <img className="logo" src={logo} alt="logo" />
          
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                    <li>
                    <Link to="/signup">SignUp</Link>
                    </li>
                    <li>
                    <Link to="/cart">
                        Cart{' '}
                        {countCartItems ? (
                            <button className="badge">{countCartItems}</button>
                            ) : (' ')}
                    
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Navbar;

