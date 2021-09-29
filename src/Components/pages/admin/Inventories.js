import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter, Link } from "react-router-dom";
import NumberFormat from 'react-number-format';

const Inventories = (props) => {

    //checking if there is a user, and if so is he an admin, if not re-route
    const user = JSON.parse(localStorage.getItem('user'));

    if(!user) {
        props.history.push("/login");
        alert("you do not have admin priveleges");
        } else if(!user.admin) {
            props.history.push("/login");
        alert("you do not have admin priveleges");
        };

    // set initial state
    const [inventories, setInv] = useState([]);

    // set empty state with initial data 
    useEffect(() => {   
        axios.get("http://localhost:3000/inventories").then(result => {
        setInv(result.data);
        })
    }, []);

    // re-render inventory function
    const getInv = () => {
        axios.get("http://localhost:3000/inventories").then(result => {
                    setInv(result.data);
                    })
    };

    // delete inventory function
    const DeleteInv = (id) => {
        const url = ("http://localhost:3000/inventories/" + id);
        axios.delete(url)
    .then(res => {
        getInv();
    })
    };

    // edit inventory function, send to new page with inventory info
    const EditInv = (inventory) => {
        const url = ("http://localhost:3000/inventories/" + inventory.id);
        axios.get(url)
    .then(res => {
        if(inventory) {
        props.history.push({
            pathname: "/editinv",
            state: { detail: {inventory} }
        });};
    });
    };


    return (
        <div style={{display: "flex",flexDirection: "column",alignItems: "flex-start"}}>
        <nav style={{marginBottom: "10px"}}>
            <ul>
                <li>
                <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                <Link to="/createinv">Create Inventory</Link>
                </li>
                <li>
                <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
        
        <h1>All the Inventory</h1>
        <table id="allInv" border="1">
            <thead>
                <tr>
                    <th>ID:</th>
                    <th>NAME:</th>
                    <th>DESCRIPTION:</th>
                    <th>PRICE:</th>
                    <th>QTY:</th>
                    <th>IMAGE:</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            { inventories.map(inventory =>
                <tr  key={inventory.id}>
                    <td>{inventory.id}</td>
                    <td>{inventory.name}</td>
                    <td>{inventory.description}</td>
                    <td><NumberFormat 
                            style={{border: "0px solid transparent"}}
                            thousandSeparator={true} 
                            prefix={'$'} 
                            value={inventory.price}
                            displayType="text"
                            />
                    </td>
                    <td>{inventory.quantity}</td>
                    <td><img src={inventory.image} width="100px" /></td>
                    <td>
                    <button className="custom-btn" onClick={() => {if (window.confirm("Are you sure?")) DeleteInv(inventory.id)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "25px", height:"25px"}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                    <button className="custom-btn" onClick={() => EditInv(inventory)}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: "25px", height:"25px"}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    </button>
                    </td>
                </tr>
            ) }
            </tbody>
        </table>
    </div>
    );
};



export default withRouter(Inventories);