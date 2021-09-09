import React from 'react';

const Cart = (props) => {
    const {cartItems, onAdd, onRemove } = props;
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
            </div>
        </div>

    );
};

export default Cart;