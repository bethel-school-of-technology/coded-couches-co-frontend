import React from 'react';
import { useState } from 'react';

const updatedArray = [];

const Product = (props) => {
    const { product } = props;
    const [cartItems, setCartItems] = useState([]);
    console.log(product);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        
        if (exist) {
        setCartItems(
            cartItems.map((x) =>
            x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
            )   
        ); 
        } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
    return (
        <div>
            <img className="small" src="https://m.media-amazon.com/images/I/A1Ev61anEuL._AC_UL320_.jpg" alt={product.name}></img>
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
