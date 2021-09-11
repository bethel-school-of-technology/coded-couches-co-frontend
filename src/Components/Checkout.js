import React, { useState } from 'react';
import Cart from './Cart';

const Checkout = () => {
    const [ checkout, setCheckout ] = useState([]);
    const itemsInCart = checkout.find((x) => x.qty > 0);
    
    const onCheckout = (item) => {
        if (itemsInCart) {
            setCheckout (
                checkout.map((x) =>
                x.qty > 0 ? {...itemsInCart, qty: itemsInCart.qty } : x
                )
            );
        } else {
            setCheckout([...itemsInCart, {...item, qty: 1}]);
        }
        console.log("Checked Out!");
    };

    return(
        <div>
            {checkout.map((checkout) => (
                <Cart key={checkout.id} onCheckout={onCheckout}></Cart>
            ))}
        </div>
    )
}

export default Checkout;