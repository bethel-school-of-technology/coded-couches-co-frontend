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
                <Link to="/inv">Invetory</Link>
                </li>
                <li>
                <Link to="/users">Users</Link>
                </li>
            </ul>
        </div>
    </div>
    );
};



export default Dashboard;