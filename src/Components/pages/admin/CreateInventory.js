import axios from "axios";
import React from "react"; 
import { withRouter } from "react-router-dom";
import { useState } from "react"; 
import Layout from "./Layout";


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

            });
        } else if(name === "" || description === "" || price === "" || quantity === "" || image === "") {
            alert("All fields are required")
        };
    };



    return (
        <div style={{display: "flex",flexDirection: "column",alignItems: "flex-start"}}>

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
            <button>Add Item</button>
        </form>
    </div>
    );
};



export default withRouter(CreateInventory);