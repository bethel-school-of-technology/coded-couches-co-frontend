import React, { useState } from 'react';

const Cart = (props) => {
    const { product } = props;
    const [ cartItems, setCartItems ] = useState([]);
    const exist = cartItems.find((x) => x.id === product.id);

    const onAdd = (product) => {
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                x.id === product.id ? {...exist, qty: exist.qty + 1}: x
                )
            );
        } else {
            setCartItems([...cartItems, {...product, qty: 1}]);
        }
    };
    const onRemove = (product) => {
        if (exist.qty === 1) {
            setCartItems(
                cartItems.filter((x) =>
                x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                x.id === product.id ? {...exist, qty: exist.qty - 1}: x
                )
            );
        }
    };

    return (
        <div>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <div className="button">
                            <button onClick={() => onRemove(item)} className="remove"> - </button>
                        </div>
                        <div className="button">
                            <button onClick={() => onAdd(item)} className="add"> + </button>
                        </div>
                        <div>
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>                        
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Cart;