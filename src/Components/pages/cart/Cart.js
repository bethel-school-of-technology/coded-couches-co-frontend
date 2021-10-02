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
            alert("You must be logged in to checkout")
        }else{
            localStorage.setItem("Order", JSON.stringify(updatedItems));
            history.push("/profile");
            localStorage.removeItem("cartItems");
        }        
    }
    
    
    return (
<<<<<<< HEAD
        <div className="cart page">
            <div>
                <p className="loginText">Cart Items</p>
=======
        <div className="cart">
            <div className="cart-h1">
                <h2>Cart Items</h2>
>>>>>>> ba0945e75b8f0a2a2255b50956921581f6f21e47
            </div>
   
            <div>
                {updatedItems.length === 0 && <div>Cart Is Empty</div>}
<<<<<<< HEAD
        
                    {updatedItems.map((updatedItem) => (                    
                    <div >
                        <div className="productCard"  key={updatedItem.id}> 
                            <div className="productImageBox">
                                <img className="productImage" src={updatedItem.image} alt={updatedItem.name}></img>                  
                            </div>
                            <div className= "productCardText">
                                <h3>{updatedItem.name}</h3>  
                                <div>{updatedItem.description}</div>
                                <div>
                                    
                                    <div>Item Price: ${updatedItem.price}</div>
                                    <div>Quantity: {updatedItem.quantity}</div>
                                    <strong>${updatedItem.quantity * updatedItem.price}</strong>
                                </div>        
                            </div>           
                        </div>  
                    </div>                  
                    ))}
                
=======
                {updatedItems.map((updatedItem) => (                    
                    <div key={updatedItem.id}>                   
                        <h3>{updatedItem.name}</h3> 
                        <img className="small" src={updatedItem.image} alt={updatedItem.name}></img>
                        <div>{updatedItem.description}</div>
                        <div>
                            <strong>${updatedItem.quantity * updatedItem.price}</strong>
                            <div>Item Price: ${updatedItem.price}</div>
                            <div>Qty: {updatedItem.quantity}</div>
                        </div>                   
                    </div>                   
                ))}
>>>>>>> ba0945e75b8f0a2a2255b50956921581f6f21e47
                {updatedItems.length !== 0 && (
                    <div className="orderTotal"> 
                        <div>
                            <div>
                                <strong>Order Total</strong>
                            </div>
                            <div>
                                <strong>${orderTotal}</strong>
                            </div>
                            <div>
                                <button className= "checkoutButton" onClick={onCheckout}>Checkout</button>
                            </div>    
                            
                        </div>     
                    </div>
                )}
            </div>
        </div>
    );
};


export default Cart;