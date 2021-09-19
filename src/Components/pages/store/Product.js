import React from 'react';
import { useState } from 'react';
import Store from '../../../Store';
const Product = (props) => {
    const { product } = props;

    
    console.log(product);
    const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
        setCartItems(
            cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
        );
        } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    
    return (
        <div>
            <img className="small" src="https://m.media-amazon.com/images/I/A1Ev61anEuL._AC_UL320_.jpg" alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>{product.description}</div>
            <div>${product.price}</div>
            <div>
                <button onClick={() => onAdd(cartItems)}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;

