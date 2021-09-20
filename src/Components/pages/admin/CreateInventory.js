import axios from "axios";
import React from "react"; 
import { withRouter, Link } from "react-router-dom";
import { useState } from "react"; 


const CreateInventory = (props) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    // create inventory
    const createInv = (e) => {
        e.preventDefault()
        if (name !== "" && description !== "") {
            const req = {
                name: name,
                description: description,
                price: price,
                quantity: quantity
            };
            // const token = localStorage.getItem("myJWT");
            // if(!token) {
            //     history.push("/login")
            // }
            // const options = {
            //     headers: {
            //         "Authorization": `Bearer ${token}`
            //     }
            // }
            // add ",options" after req when ready for jwt
            axios.post("http://localhost:3000/inventories", req).then(result => {
                console.log(result.data);
                document.getElementById("createInv").reset();
                props.history.push("/inv");
                //need to set state of input values to empty
                // setName("");
                // setDescription("");
            });
        }
    };



    return (
        <div>Hello Create Inventory
            <nav>
            <ul>
                <li>
                <Link to="/dash">Dashboard</Link>
                </li>
                <li>
                <Link to="/inv">Inventory</Link>
                </li>
            </ul>
        </nav>
        <form onSubmit={ createInv } id="createInv">
            <h1>Add Inventory</h1>
            <label>Item Name</label>
            <input type="text" name="name" onChange={ e => setName(e.target.value)}></input> <br></br>
            <label>Description</label> 
            <input type="text" name="description" onChange={ e => setDescription(e.target.value)}></input> <br></br>
            <label>Price</label> 
            <input type="text" name="price" onChange={ e => setPrice(e.target.value)}></input> <br></br>
            <label>Quantity</label> 
            <input type="text" name="quantity" onChange={ e => setQuantity(e.target.value)}></input> <br></br>
            <button>Add Item</button>
        </form>
    </div>
    );
};



export default withRouter(CreateInventory);