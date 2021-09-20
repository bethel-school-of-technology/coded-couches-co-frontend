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

    // const EditInv = (inventory) => {
    //     const url = ("http://localhost:3000/inventories/" + inventory.id);
    //     axios.get(url)
    // .then(res => {
    //     if(inventory) {
    //     props.history.push({
    //         pathname: "/editinv",
    //         search: '?query=abc',
    //         state: { detail: {inventory} }
    //     });};
    // });
    // };



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
            </ul>
        </nav>
        <h1>All the Inventory</h1>
    <ul>
    <div id="allInv">
    { inventories.map(inventory => 
            <li key={inventory.id}>
                INVENTORY ID:{inventory.id} <br /> NAME: {inventory.name} <br /> DESCRIPTION: {inventory.description} <br />
                PRICE: {inventory.price} <br /> QUANTITY: {inventory.quantity} <br />
                <button onClick={() => DeleteInv(inventory.id) }>REMOVE</button>
                {/* <button onClick={() => EditInv(inventory)}>EDIT INV</button> */}
            </li>
            ) }
    </div>
    </ul> 
    </div>
    );
};



export default withRouter(Inventories);