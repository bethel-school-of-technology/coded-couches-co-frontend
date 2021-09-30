import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    return (
    <>
    <nav style={{marginBottom: "10px"}}>
        <ul>
            <li>
                <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/admin/inventory">Inventory</Link>
            </li>
            <li>
                <Link to="/admin/inventory/create">Create Inventory</Link>
            </li>
            <li>
                <Link to="/admin/users">Users</Link>
            </li>
            <li>
                <Link to="/admin/users/create">Create User</Link>
            </li>
        </ul>
    </nav>

    {children}
    </>
    );
};

export default Layout;
