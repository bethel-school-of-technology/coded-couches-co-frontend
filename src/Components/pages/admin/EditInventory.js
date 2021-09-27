import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter, useLocation, Link } from "react-router-dom";



const EditInventory = (props) => {

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
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");

    // using previous pages information
    const location = useLocation();
    
    
    // setting previous pages information on to current page
    useEffect(() => {
    }, [location]);

    // edit current inventory information
    const EditInv = (inventory) => {
        const url = "http://localhost:3000/inventories/" + inventory.id;
        if (name !== "" && description !== "" && price !== "" && quantity !== "" && image !== "") {
            const req = {
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            image: image
            };
            axios.put(url, req).then((result) => {
            props.history.push("/inv");
            console.log(inventory.image);
            });
        } else if(name === "" || description === "" || price === "" || quantity === "" || image === "") {
            alert("All fields are required")
        };
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
            </ul>
        </nav>
        <h1>Edit Inventory</h1>
        <div>
            <table border="1"> 
                <thead>
                    <tr>
                        <th>ID: </th>
                        <th>NAME: </th>
                        <th>DESCRIPTION: </th>
                        <th>PRICE: </th>
                        <th>QUANTITY: </th>
                        <th>IMAGE: </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{location.state.detail.inventory.id}</td>
                        <td>{location.state.detail.inventory.name}</td>
                        <td>{location.state.detail.inventory.description}</td>
                        <td>${location.state.detail.inventory.price}</td>
                        <td>{location.state.detail.inventory.quantity}</td>
                        <td>{location.state.detail.inventory.image}</td>
                    </tr>
                </tbody>
            </table>
            <label>Set Inventory Name</label>
            <input type="text" name="changeInv"  onChange={ e => setName(e.target.value)}></input> <br></br>
            <label>Set Description</label> 
            <input type="text" name="changeDescr"  onChange={ e => setDescription(e.target.value)}></input> <br></br>
            <label>Set Price</label>
            <input type="number" step=".01" name="changePrice"  onChange={ e => setPrice(e.target.value)}></input> <br></br>
            <label>Set Quantity</label> 
            <input type="number" name="changeQuan"  onChange={ e => setQuantity(e.target.value)}></input> <br></br>
            <label>Set Image</label>
            <input type="text" name="changeImage"  onChange={ e => setImage(e.target.value)}></input> <br></br>
            <button onClick={() => EditInv(location.state.detail.inventory)}>SAVE</button>
        </div>
    </div>
    );
};



export default withRouter(EditInventory);