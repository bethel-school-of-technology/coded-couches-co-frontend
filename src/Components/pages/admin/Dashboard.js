import React from "react"; 
import { Link } from 'react-router-dom';

const Dashboard = () => {


return (
    <div>
        
        <div id="adminNav">
            <ul>
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
        </div>
        <h1>Welcome to Admin Dashboard</h1>
    </div>
    );
};



export default Dashboard;