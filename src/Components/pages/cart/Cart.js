import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const URL = process.env.REACT_APP_API_URLFRONT

const Cart = () => {
    let history = useHistory();
    
    const [updatedItems, setUpdatedItems] = useState([]);  
    const orderTotal = updatedItems.reduce((a, c) => a + c.price * c.quantity, 0);

   
    //Displays item that's stored in localStorage
    useEffect(() => {
        const cartItemsLocal = JSON.parse(localStorage.getItem("cartItems")) || [];
        setUpdatedItems(cartItemsLocal);
        
    }, [])

    //If no user data, user will be redirected to login page
    //If user data, checkout stores the "cartItems" in new array "Order" in localStorage
    const onCheckout = () => {
        let userData = JSON.parse(localStorage.getItem("user"));
        if (!userData){
            window.location.replace(`${URL}/login`)
        }else{
            localStorage.setItem("Order", JSON.stringify(updatedItems));
            history.push("/profile");
            localStorage.removeItem("cartItems");
        }        
    }
    
    
    return (
        <div className="cart">
            <div className="cart-h1">
                <h2>Cart Items</h2>
            </div>
            
            <div>
                {updatedItems.length === 0 && <div>Cart Is Empty</div>}
                {updatedItems.map((updatedItem) => (                    
                   <ul>
                    <li key={updatedItem.id}>                   
                        <strong>{updatedItem.name}</strong> 
                        <img className="small" src={updatedItem.image} alt={updatedItem.name}></img>
                        <div>{updatedItem.description}</div>
                        <div>
                            <strong>${updatedItem.quantity * updatedItem.price}</strong>
                            <div>Item Price: ${updatedItem.price}</div>
                            <div>Qty: {updatedItem.quantity}</div>
                        </div>                   
                    </li>  
                    </ul>                  
                ))}
                {updatedItems.length !== 0 && (
                    <div>
                        <hr></hr>
                        <div>
                            <div>
                                <strong>Order Total</strong>
                            </div>
                            <div>
                                <strong>${orderTotal}</strong>
                            </div>
                            <div>
                                <button onClick={onCheckout}>Checkout</button>
                            </div>    
                        </div>     
                    </div>
                )}
            </div>
        </div>
    );
};


export default Cart;