import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { withRouter, useLocation } from "react-router-dom";
import Layout from "./Layout";

const URL = process.env.REACT_APP_API_URL

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
        const url = `${URL}/inventories/` + inventory.id;
        if (name !== "" && description !== "" && price !== "" && quantity !== "" && image !== "") {
            const req = {
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            image: image
            };
            axios.put(url, req).then((result) => {
            props.history.push("/admin/inventory");
            console.log(inventory.image);
            });
        } else if(name === "" || description === "" || price === "" || quantity === "" || image === "") {
            alert("All fields are required")
        };
        };


    return (
        <div  className="adminLayout">
            <Layout>
            </Layout>
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
                        <td><img src={location.state.detail.inventory.image} alt="" width="100px" /></td>
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
            <button className="btn-add" onClick={() => EditInv(location.state.detail.inventory)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>
            </button>
            <div>empty info until footer is move below visible area</div><br></br>
            <div>empty info until footer is move below visible area</div><br></br>
        </div>
    </div>
    );
};



export default withRouter(EditInventory);