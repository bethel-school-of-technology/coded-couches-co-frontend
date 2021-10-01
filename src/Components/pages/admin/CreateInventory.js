import axios from "axios";
import React from "react"; 
import { withRouter } from "react-router-dom";
import { useState } from "react"; 
import Layout from "./Layout";

const URL = process.env.REACT_APP_API_URL

const CreateInventory = (props) => {

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

    // create inventory
    const createInv = (e) => {
        e.preventDefault()
        if (name !== "" && description !== "" && price !== "" && quantity !== "" && image !== "") {
            const req = {
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                image: image
            };
            axios.post(`${URL}/inventories`, req).then(result => {
                console.log(result.data);
                document.getElementById("createInv").reset();
                props.history.push("/admin/inventory");
            });
        } else if(name === "" || description === "" || price === "" || quantity === "" || image === "") {
            alert("All fields are required")
        };
    };



    return (
        <div  className="adminLayout">

        <Layout>
        </Layout>
        <form onSubmit={ createInv } id="createInv">
            <h1>Add Inventory</h1>
            <label>Item Name</label>
            <input type="text" name="name" onChange={ e => setName(e.target.value)}></input> <br></br>
            <label>Description</label> 
            <input type="text" name="description" onChange={ e => setDescription(e.target.value)}></input> <br></br>
            <label>Price</label> 
            <input type="number" step=".01" name="price" onChange={ e => setPrice(e.target.value)}></input> <br></br>
            <label>Quantity</label> 
            <input type="number" name="quantity" onChange={ e => setQuantity(e.target.value)}></input> <br></br>
            <label>Image</label> 
            <input type="text" name="image" onChange={ e => setImage(e.target.value)}></input> <br></br>
            <button className="btn-add">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </button>
        </form>
    </div>
    );
};



export default withRouter(CreateInventory);