//import axios from "axios";
import React from "react"; 
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
// you have a table that lists all users 


const EditInventory = () => {

    



    return (
        <div>Hello Edit Inventory
            <nav>
            <ul>
                <li>
                <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                <Link to="/createinv">Create Inventory</Link>
                </li>
            </ul>
        </nav>
        
    </div>
    );
};



export default withRouter(EditInventory);