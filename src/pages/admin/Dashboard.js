import React from "react"; 
import { Link } from 'react-router-dom';
// links to other pages...

const Dashboard = () => {


return (
    <div>
        <h1>Welcome to Admin Dashboard</h1>
        <div id="adminNav">
            <ul>
                <li>
                <Link to="/inv">Inventory</Link>
                </li>
                <li>
                <Link to="">Create Inventory</Link>
                </li>
                <li>
                <Link to="">Edit Inventory</Link>
                </li>
                <li>
                <Link to="/users">Users</Link>
                </li>
                <li>
                <Link to="/createuser">Create User</Link>
                </li>
                <li>
                <Link to="/edituser">Edit User</Link>
                </li>
            </ul>
        </div>
    </div>
    );
};



export default Dashboard;