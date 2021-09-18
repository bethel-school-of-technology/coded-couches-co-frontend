import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const URL = process.env.API_URL

const Checkout = (props) => {
    const { cartItems } = props;
    const [order, setOrder] = useState([]);

    const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const orderTotal = itemPrice;

    const getOrder = async () => {
        await axios.get(`${URL}/cart/checkout`)
            .then(result => {
                setOrder(result.data);
            }).catch(e => console.error(e))
    }

    const createOrder = async () => {
        if (cartItems > 0) {
            const req = {
                // userId: userId,
                // order: order,
                // orderTotal: orderTotal
            };

            await axios.post(`${URL}/cart/checkout`, req).then(result => {
                console.log(result.data);
                getOrder();
            })
        }
    }



    return(
        <div>
        </div>
    )
}

export default Checkout;