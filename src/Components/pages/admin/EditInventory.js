import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter, useLocation, Link } from "react-router-dom";



const EditInventory = (props) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");

    const location = useLocation();
    
    useEffect(() => {
    }, [location]);

    

    const EditInv = (inventory) => {
        const url = "http://localhost:3000/inventories/" + inventory.id;
        if (name !== "" && description !== "") {
            const req = {
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            image: image
            };
            axios.put(url, req).then((result) => {
            // getInv();
            // setName("");
            // setDescription("");
            // setPrice("");
            // setQuantity("");
            // setImage("");
            props.history.push("/inv");
            console.log(inventory.image);
            });
        }
        };


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
        <h1>Edit Inventory</h1>
    <ul>
        <div >
            <table border="1"> 
                <tr>
                    <th>ID: </th>
                    <th>NAME: </th>
                    <th>DESCRIPTION: </th>
                    <th>PRICE: </th>
                    <th>QUANTITY: </th>
                    <th>IMAGE: </th>
                </tr>
                <tr>
                    <td>{location.state.detail.inventory.id}</td>
                    <td>{location.state.detail.inventory.name}</td>
                    <td>{location.state.detail.inventory.description}</td>
                    <td>${location.state.detail.inventory.price}</td>
                    <td>{location.state.detail.inventory.quantity}</td>
                    <td>{location.state.detail.inventory.image}</td>
                </tr>
            {/* USER ID: {location.state.detail.inventory.id} <br /> 
            NAME: {location.state.detail.inventory.name} <br /> 
            DESCRIPTION: {location.state.detail.inventory.description} <br /> 
            PRICE: {location.state.detail.inventory.price} <br />
            QUANTITY: {location.state.detail.inventory.quantity} <br /> 
            IMAGE: {location.state.detail.inventory.image} <br />  */}
            
                {/* <label>Set Inventory Name</label>
                <input type="text" name="changeInv"  onChange={ e => setName(e.target.value)}></input> <br></br>
                <label>Set Description</label> 
                <input type="text" name="changeDescr"  onChange={ e => setDescription(e.target.value)}></input> <br></br>
                <label>Set Price</label>
                <input type="text" name="changePrice"  onChange={ e => setPrice(e.target.value)}></input> <br></br>
                <label>Set Quantity</label> 
                <input type="text" name="changeQuan"  onChange={ e => setQuantity(e.target.value)}></input> <br></br>
                <label>Set Image</label>
                <input type="text" name="changeImage"  onChange={ e => setImage(e.target.value)}></input> <br></br> */}
                
                <button onClick={() => EditInv(location.state.detail.inventory)}>SAVE</button>
            </table>
            </div>
    </ul> 
    </div>
    );
};



export default withRouter(EditInventory);