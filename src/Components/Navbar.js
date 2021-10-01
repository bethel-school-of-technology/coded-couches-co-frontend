import React from "react";
import { Link, withRouter } from 'react-router-dom';
import CCCimage from '../Images/CCCimage.png';

const Navbar = () => {
    // const Logout = () => {
    //     localStorage.removeItem("accessToken");
    //     localStorage.removeItem("user");
    // };

    const LoggedIn = () => {
        let userData = JSON.parse(localStorage.getItem("user"));
        if(userData) {
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
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/cart">Cart</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            );
        }else{
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
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/cart">Cart</Link></li>
                                <li><Link to="/signup">SignUp</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            )
        }
    }
    
    return(
        <LoggedIn />
        // <header>
        //     <div className="navbar">
        //         <Link to="/" >
        //             <img  className="logo" src={CCCimage} alt="logo" />
        //         </Link>

        //         <nav>
        //             <ul>
        //                 <li><Link to="/">Home</Link></li>
        //                 <li><Link to="/about">About</Link></li>
        //                 <li><Link to="/shop">Shop</Link></li>
        //                 <li><Link to="/profile">Profile</Link></li>
        //                 <li><Link to="/cart">Cart</Link></li>
        //                 <li><Link to="/signup">SignUp</Link></li>
        //                 <li><Link to="/login">Login</Link></li>
                        
                        
        //                 <li><Link onClick={Logout} to="/login">Logout</Link></li>
        //             </ul>
        //         </nav>
        //     </div>
        // </header>
    );
};
export default withRouter(Navbar);