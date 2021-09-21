import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Cart = () => {
    let history = useHistory();
    //const { product } = props;
    const [cartItems, setCartItems] = useState([]);
    
  
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
        setCartItems(
            cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
        );
        } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
        }

        console.log(cartItems);
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
        setCartItems(
            cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
        );
        }
    };
    //   const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    //   const orderTotal = itemPrice;

    const onCheckout = () => {
        
    history.push("/profile");
    }


    const [updatedItems, setUpdatedItems] = useState([]);
    console.log(updatedItems);
    useEffect(() => {
        const cartItemsLocal = JSON.parse(localStorage.getItem(["cartItems"])) || [];
        setUpdatedItems(cartItemsLocal);
        console.log(cartItemsLocal);
    }, [])

    return (
        <div>
            <h2>Cart Items</h2>
            <div>{console.log(updatedItems)}</div>
            <div>
                {updatedItems.length === 0 && <div>Cart Is Empty</div>}
                {updatedItems.map((product) => (                    
                    <div key={product.id}>                    
                        <div>{product.name}</div>
                        <img className="small" src="https://m.media-amazon.com/images/I/A1Ev61anEuL._AC_UL320_.jpg" alt={product.name}></img>
                        <div className="button">
                            <button onClick={() => onRemove(product)} className="remove"> - </button>
                        </div>
                        <div className="button">
                            <button onClick={() => onAdd(product)} className="add"> + </button>
                        </div>
                        <div>
                            {product.qty} x ${product.price}
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
                        