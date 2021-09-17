import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
// you have a table that lists all users 


const Users = () => {





    return (
        <div>Hello Users
        <nav>
            <ul>
                <li>
                <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                <Link to="/inv">Invetory</Link>
                </li>
            </ul>
        </nav>
    </div>
    );
};



export default withRouter(Users);