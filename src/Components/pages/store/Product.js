import React from 'react';

const Product = (props) => {
    const { product } = props;
    
    const onAdd = (product) => {
        const cartItemsLocal = JSON.parse(localStorage.getItem("cartItems")) || [];
        const exist = cartItemsLocal.find((x) => x.id === product.id);

        if (exist) {
            cartItemsLocal.map((x) => {
                    if (x.id === product.id) {
                        x.quantity += 1;
                    }
                    return x;
                }
            )
        } else {
            cartItemsLocal.push({...product, quantity: 1});
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItemsLocal));
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
            <hr></hr>
        </div>
    );
};

export default Product;
