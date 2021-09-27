import React from "react";
import { Link, withRouter } from 'react-router-dom';


const Dashboard = (props) => {
    //checking if there is a user, and if so is he an admin, if not re-route
    const user = JSON.parse(localStorage.getItem('user'));

    if(!user) {
        props.history.push("/login");
        alert("you do not have admin priveleges");
        } else if(!user.admin) {
            props.history.push("/login");
        alert("you do not have admin priveleges");
        };
    


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
        <h1 className="Dash">Welcome to Admin Dashboard</h1>
    </div>
    );
};



export default withRouter(Dashboard);