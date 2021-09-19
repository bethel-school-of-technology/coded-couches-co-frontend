//import axios from "axios";
import React from "react"; 
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
// you have a table that lists all users 


const Editusers = () => {

    



    return (
        <div>Hello Edit Users
            <nav>
            <ul>
                <li>
                <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                <Link to="/createUser">Create User</Link>
                </li>
            </ul>
        </nav>
        
    </div>
    );
};



export default withRouter(Editusers);