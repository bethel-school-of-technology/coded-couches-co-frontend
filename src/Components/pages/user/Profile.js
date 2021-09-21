import axios from 'axios';
import React, { useEffect, useState } from 'react';

const URL = process.env.API_URL;

const Profile = () => {
    //const { user } = users;
    const [user, setUser] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect((id) => {
        axios.get(`${URL}/users/profile` + id).then(result => {
            setUser(result.data);
            console.log(result.data);
        })
    }, []);

    useEffect(() => {
        const orderHistory = JSON.parse(localStorage.getItem(["Order"])) || [];
        setOrder(orderHistory);
    }, [])
    
    return(
        <div>
            <h3>Welcome, {user.username}!</h3>
            <div>{console.log(user)}</div>
            <hr></hr>
            <h3>Order History</h3>
                <div>
                    {order.length === 0 && <div> No Order History </div>}
                    {order.map((order) =>(
                        <div key={order.id}>
                            <div>{order.name}</div>
                            <img className="small" src="https://m.media-amazon.com/images/I/A1Ev61anEuL._AC_UL320_.jpg" alt={order.name}></img>
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