import React, { useEffect, useState } from 'react';

const URL = process.env.REACT_APP_API_URLFRONT

const Profile = () => {

    const [order, setOrder] = useState([]);
    const orderTotal = order.reduce((a, c) => a + c.price * c.quantity, 0);
    
    // Verifies user is logged in using user information in the localstorage from the login
    const getUserData = () => {
        const userData =  JSON.parse(localStorage.getItem("user"))
        if (!userData) {
            window.location.replace(`${URL}/login`)
        } 
    };

    //Displays cart items stored in localStorage "Order"
    useEffect(() => {
        const orderHistory = JSON.parse(localStorage.getItem(["Order"])) || [];
        setOrder(orderHistory);
        getUserData();
    }, []);   
    
    return(
        <div className="profile">

            <div className="profile-h1">
                <h1>Profile</h1> 
            </div>
            
            <hr></hr>
            <h3>Order History</h3>
                <div>
                    {order.length === 0 && <div> No Order History </div>}
                    {order.map((order) =>(
                        <div key={order.id}>
                            <strong>{order.name}</strong>
                            <img className="small" src={order.image} alt={order.name}></img>
                            <div>{order.description}</div>
                            <div>
                            <strong>${order.quantity * order.price}</strong>
                            <div>Item Price: ${order.price}</div>
                            <div>Qty: {order.quantity}</div>
                        </div>          
                        </div>
                    ))}
                    {order.length !== 0 && (
                        <div>
                        <hr></hr>
                        <div>
                            <div>
                                <strong>Order Total</strong>
                            </div>
                            <div>
                                <strong>${orderTotal}</strong>
                            </div>  
                        </div>     
                    </div>
                    )}
                </div>           
        </div>
    );
}

export default Profile;