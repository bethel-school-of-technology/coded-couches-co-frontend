import React from "react";
import data from '../data';
import Product from "./Product";

const Shop = (props) => {
    const { products } = data;
    const { onAdd } = props;
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