import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Cart = () => {
    let history = useHistory();
    
    const [updatedItems, setUpdatedItems] = useState([]);  

   
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
            window.location.replace("http://localhost:3001/login")
        }else{
            localStorage.setItem("Order", JSON.stringify(updatedItems));
            history.push("/profile");
            localStorage.removeItem("cartItems");
        }        
    }
    console.log(updatedItems);
    return (
        <div>
            <h2>Cart Items</h2>
            <div>
                {updatedItems.length === 0 && <div>Cart Is Empty</div>}
                {updatedItems.map((updatedItem) => (                    
                   <ul>
                    <li key={updatedItem.id}>                    
                        <div>{updatedItem.name}</div>
                        <img className="small" src={updatedItem.image} alt={updatedItem.name}></img>
                        <div className="button">
                            <button className="remove"> - </button>
                        </div>
                        <div className="button">
                            <button className="add"> + </button>
                        </div>
                        <div>
                            {updatedItem.quantity} x ${updatedItem.price} <br></br>
                            Order Total: ${(updatedItem.quantity)*(updatedItem.price)}
                        </div>              
                                       <div>{console.log(updatedItem)}</div>     
                    </li>  
                    </ul>                  
                ))}
                {updatedItems.length !== 0 && (
                    <div>
                        <hr></hr>
                        <div>
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

// <div>{console.log(updatedItems)}</div>


// <div>
//                             <div>Item Price</div>
//                             <div>${itemPrice.toFixed(2)}</div>
//                         </div>
//                         <div>
//                             <div>
//                                 <strong>Order Total</strong>
//                             </div>
//                             <div>
//                                 <strong>${orderTotal.toFixed(2)}</strong>
//                             </div>
//                         </div>

//   const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    //   const orderTotal = itemPrice;


// const onAdd = (cartItems) => {
    //     const exist = updatedItems.find((x) => x.id === cartItems.id);
    //     if (exist) {
    //     setCartItems(
    //         updatedItems.map((x) =>
    //         x.id === cartItems.id ? { ...exist, quantity: exist.quantity + 1 } : x
    //         )
    //     );console.log(cartItems);
    //     } else {
    //     setCartItems([...updatedItems, { ...cartItems, quantity: 1 }]);
    //     }        
    // };
                        