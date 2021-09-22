import React from 'react';
import { useState } from 'react';

const updatedArray = [];

const Product = (props) => {
    const { product } = props;
    const [cartItems, setCartItems] = useState([]);
    const exist = cartItems.find((x) => x.id === product.id);
    
    const onAdd = (product) => {    
        if (exist) {            
            setCartItems(
                cartItems.map((x) =>
                x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
                )  
            ); 
            updatedArray.push(cartItems);
        }else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);       
        }
        localStorage.setItem("cartItems", JSON.stringify(updatedArray));
    };
    
    
    
    
    
    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>{product.description}</div>
            <div>${product.price}</div>
            <div>
                <button onClick={() => onAdd(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
