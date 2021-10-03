import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";

const URL = process.env.REACT_APP_API_URL

const Shop = (props) => {
    const [inventory, setInventory] = useState([]);
    const { onAdd } = props;

    useEffect (() => {   
        axios.get(`${URL}/inventories`).then(result => {
        setInventory(result.data);
        })
    }, []);
   
    return(
        <div className="shop"><br></br>
            <h2 className= "heading" >Products</h2>
            <div className="block">
                {inventory.map((inventory) => (
                    
                    <Product key={inventory.id} product={inventory} onAdd={onAdd}></Product>
                ))}
            </div>
            <div className="space"></div>
        </div>
    );
};
export default Shop;