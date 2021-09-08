import React from "react";
import data from '../data';
import Product from "./Product";

const Shop = () => {
    const {products} = data;
    return(
        <div className="shop">
            <h2>Products</h2>
            <div className="block">
                {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>
        </div>
    );
};
export default Shop;