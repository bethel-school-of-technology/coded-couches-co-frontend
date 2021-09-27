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
                    <td maxLength="10">{inventory.description}</td>
                    <td><NumberFormat 
                            style={{border: "0px solid transparent"}}
                            thousandSeparator={true} 
                            prefix={'$'} 
                            value={inventory.price}
                            />
                    </td>
                    <td>{inventory.quantity}</td>
                    <td>{inventory.image}</td>
                </tr>
                <tr>
                    <td><button onClick={() => {if (window.confirm("Are you sure?")) DeleteInv(inventory.id)}}>REMOVE</button></td>
                    <td><button onClick={() => EditInv(inventory)}>EDIT INV</button></td>
                </tr>
            </tbody>
        </table>
            ) }
    </div>
    );
};



export default withRouter(Inventories);