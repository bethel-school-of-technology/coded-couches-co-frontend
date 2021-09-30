import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    return (
    <>
    <nav style={{marginBottom: "10px"}}>
        <ul>
            <li>
                <Link to="/dash">Dashboard</Link>
            </li>
            <li>
                <Link to="/inv">Inventory</Link>
            </li>
            <li>
                <Link to="/createinv">Create Inventory</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/createuser">Create User</Link>
            </li>
        </ul>
    </nav>

    {children}
    </>
    );
};

export default Layout;
