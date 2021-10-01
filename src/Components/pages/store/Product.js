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
            <div className="productCard">
                    <div className="productImageBox">
                        <img className="productImage" src={product.image} alt={product.name}></img>
                    </div>                
                    <div className= "productCardText">
                        <h3>{product.name}</h3>
                        <div>{product.description}</div>
                        <div>${product.price}</div>
                        <div className="productButton">
                        <button  onClick={() => onAdd(product)}>Add to Cart</button>
                        </div>
                    </div>
                    
            </div>
        </div>
    );
};

export default Product;
