import axios from 'axios';
import React, { useEffect, useState } from 'react';

const URL = process.env.API_URL;

const Profile = () => {
    const [loggedUser, setLoggedUser] = useState([]);
    const [order, setOrder] = useState([]);
    let userData =  JSON.parse(localStorage.getItem("user"));

    
    // GET request to display User information
    // useEffect(() => {
    //     axios.get(`${URL}/users/:id`).then((result) => {
    //         const token = result.data.jwt;
    //         const user = result.data.user.id;
    //         if(token) {
    //             if(user) {
    //                 setLoggedUser(result.data);
    //             }
    //         }
            
    //     });
    // }, []);

    //Displays "Order" of cart items stored in localStorage
    useEffect(() => {
        const orderHistory = JSON.parse(localStorage.getItem(["Order"])) || [];
        setOrder(orderHistory);
        getUserData();
    }, [])
    // Verifies user is logged in using user information in the localstorage from the Login
    const getUserData = () => {
        let userData =  JSON.parse(localStorage.getItem("user"))
          console.log(userData);
          if (!userData) {
              console.log("this worked")
              window.location.replace("http://localhost:3001/login")
          } 
      }
    
    return(
        <div>
            <div>
                {loggedUser.map((user) =>(
                    <div key={user.id}>
                    <h3>Welcome, {user.username}!</h3>
                    <div>{console.log(user)}</div>
                    </div>
                    
                ))}
            </div>
            
            
            <hr></hr>
            <h3>Order History</h3>
                <div>
                    {order.length === 0 && <div> No Order History </div>}
                    {order.map((order) =>(
                        <div key={order.id}>
                            <div>{order.name}</div>
                            <img className="small" src={order.image} alt={order.name}></img>
                            <div>{order.description}</div>
                            <div>
                            {order.quantity} x ${order.price} <br></br>
                            Order Total: ${(order.quantity)*(order.price)}
                        </div>          
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default Profile;

// {user.map((user) =>(
//     <div key={user.id}>
//         <div>
//         {user.firstName}{' '}{user.lastName}{<br></br>}
//         {user.email}
//         </div>
//     </div>
// ))}