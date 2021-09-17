import React from "react";
import Product from "./Product";

const Shop = (props) => {
    const { products, onAdd } = props;
    return(
        <div className="shop">
            <h2>Products</h2>
            <div className="block">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </div>
    );
};
export default Shop;