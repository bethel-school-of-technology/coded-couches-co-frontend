import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Cart = (props) => {
    let history = useHistory();

    const {onAdd} = props;
    const [updatedItems, setUpdatedItems] = useState([]);  
    
    
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
    
        
    //Displays item that's stored in localStorage
    useEffect(() => {
        const cartItemsLocal = JSON.parse(localStorage.getItem(["cartItems"])) || [];
        setUpdatedItems(cartItemsLocal);
        
    }, [])

    //Stores the "cartItems" in new array "Order" in localStorage
    const onCheckout = () => {
        localStorage.setItem("Order", JSON.stringify(updatedItems));
        history.push("/profile");
        localStorage.removeItem("cartItems");
    }
    return (
        <div>
            <h2>Cart Items</h2>
            <div>
                {updatedItems.length === 0 && <div>Cart Is Empty</div>}
                {updatedItems.map((updatedItems) => (                    
                    <div key={updatedItems.id}>                    
                        <div>{updatedItems.name}</div>
                        <img className="small" src={updatedItems.image} alt={updatedItems.name}></img>
                        <div className="button">
                            <button className="remove"> - </button>
                        </div>
                        <div className="button">
                            <button onClick={() => onAdd(updatedItems)} className="add"> + </button>
                        </div>
                        <div>
                            {updatedItems.quantity} x ${updatedItems.price} <br></br>
                            Order Total: ${(updatedItems.quantity)*(updatedItems.price)}
                        </div>              
                                            
                    </div>                    
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
                        