import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter, Link } from "react-router-dom";

const Inventories = (props) => {

    const [inventories, setInv] = useState([]);

    const getInv = () => {
        axios.get("http://localhost:3000/inventories").then(result => {
                    setInv(result.data);
                    })
    };

    //get inventory 
    useEffect(() => {   
        axios.get("http://localhost:3000/inventories").then(result => {
        setInv(result.data);
        })
    }, []);

    const DeleteInv = (id) => {
        const url = ("http://localhost:3000/inventories/" + id);
        axios.delete(url)
    .then(res => {
        // res.data;
        getInv();
    })
    
    };

    const EditInv = (inventory) => {
        const url = ("http://localhost:3000/inventories/" + inventory.id);
        axios.get(url)
    .then(res => {
        if(inventory) {
        props.history.push({
            pathname: "/editinv",
            search: '?query=abc',
            state: { detail: {inventory} }
        });};
    });
    };



    return (
        <div>
        <nav>
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
    { inventories.map(inventory => 
        <table id="allInv" border="1" key={inventory.id}>
                <thead>
                <tr>
                    <th>ID:</th>
                    <th>NAME:</th>
                    <th>DESCRIPTION:</th>
                    <th>PRICE:</th>
                    <th>QTY:</th>
                    <th>IMAGE:</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{inventory.id}</td>
                    <td>{inventory.name}</td>
                    <td>{inventory.description}</td>
                    <td>${inventory.price}</td>
                    <td>{inventory.quantity}</td>
                    <td>{inventory.image}</td>
                </tr>
                
                {/* INVENTORY ID: {inventory.id} <br /> NAME: {inventory.name} <br /> DESCRIPTION: {inventory.description} <br />
                PRICE: {inventory.price} <br /> QUANTITY: {inventory.quantity} <br /> IMAGE: {inventory.image} <br /> */}
                <tr>
                    <td><button onClick={() => DeleteInv(inventory.id) }>REMOVE</button></td>
                    <td><button onClick={() => EditInv(inventory)}>EDIT INV</button></td>
                </tr>
                </tbody>
                </table>
            ) }
    </div>
    );
};



export default withRouter(Inventories);