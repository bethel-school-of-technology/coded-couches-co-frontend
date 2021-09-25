import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
//import data from "../../../data";
import Product from "./Product";

const Shop = (props) => {

    const [inventory, setInventory] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false)

    //console.log(inventory);
    useEffect (() => {   
        axios.get("http://localhost:3000/inventories").then(result => {
            //console.log(result);
        setInventory(result.data);
        getUserData();
        })
    }, []);


const getUserData = () => {
  let userData =  JSON.parse(localStorage.getItem("user"))
    console.log(userData);
    if (!userData) {
        console.log("this worked")
        window.location.replace("http://localhost:3001/login")
    } 
}



    //const {products} = data;
    const { onAdd } = props;
    return(
        <div className="shop">
            <h2>Products</h2>
            <div className="block">
                {inventory.map((inventory) => (
                    
                    <Product key={inventory.id} product={inventory} onAdd={onAdd}></Product>
                ))}
            </div>
        </div>
    );
};
export default Shop;