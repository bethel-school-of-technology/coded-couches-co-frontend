import React, { useEffect } from "react";
import { Link, withRouter, useLocation } from 'react-router-dom';


const Dashboard = (props) => {

    // const [admin, setAdmin] = useState("");
    
    // using previous pages information
    const location = useLocation();

    // setting previous pages information on to current page
    // useEffect(() => {
    //     console.log(location.state.detail)
    // }, [location]);

    // if (!location.state.detail) {
    //     props.history.push("/shop")
    // } 

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



export default withRouter(Dashboard);