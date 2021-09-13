import React from 'react';

const Cart = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrice * 0.056;
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const orderTotal = itemPrice + taxPrice + shippingPrice;
    
    return (
        <div>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <img className="small" src={item.image} alt={item.name}></img>
                        <div className="button">
                            <button onClick={() => onRemove(item)} className="remove"> - </button>
                        </div>
                        <div className="button">
                            <button onClick={() => onAdd(item)} className="add"> + </button>
                        </div>
                        <div>
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>                                  
                    </div>                    
                ))}
                {cartItems.length !== 0 && (
                    <div>
                        <hr></hr>
                        <div>
                            <div>Item Price</div>
                            <div>${itemPrice.toFixed(2)}</div>
                        </div>
                        <div>
                            <div>Tax Price</div>
                            <div>${taxPrice.toFixed(2)}</div>
                        </div>
                        <div>
                            <div>Shipping</div>
                            <div>${shippingPrice.toFixed(2)}</div>
                        </div>
                        <div>
                            <div>
                                <strong>Order Total</strong>
                            </div>
                            <div>
                                <strong>${orderTotal.toFixed(2)}</strong>
                            </div>
                        </div>
                        <div>
                            <div>
                                <button>Checkout</button>
                            </div>    
                        </div>     
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;

