import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
// you have a table that lists all users 


const Createusers = () => {

    



    return (
        <div>Hello Create Users
        <nav>
            <ul>
                <li>
                <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                <Link to="/editUser">Edit User</Link>
                </li>
            </ul>
        </nav>
    </div>
    );
};



export default withRouter(Createusers);