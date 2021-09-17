import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
// tabel thtat lists all items

const Inventories = () => {





    return (
        <div>Hello Inventory
        <nav>
            <ul>
                <li>
                <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                <Link to="/createinv">Create Inventory</Link>
                </li>
                <li>
                <Link to="/editinv">Edit Inventory</Link>
                </li>
            </ul>
        </nav>
    </div>
    );
};



export default withRouter(Inventories);