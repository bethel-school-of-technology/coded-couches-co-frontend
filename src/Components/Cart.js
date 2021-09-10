import React from 'react';


const Cart = (props) => {
  const {cartItems, onAdd, onRemove } = props;
    
//   const [ checkout, setCheckout ] = useState();
//   const itemsInCart = cartItems.find((x) => x.qty > 0);
    
//   const onCheckout = (product) => {
//     if (itemsInCart) {
//         setCheckout (
//             checkout.map((x) =>
//             x.qty > 0 ? {...itemsInCart, qty: itemsInCart.qty } : x
//             )
//         );
//     } else {
//         setCheckout([...cartItems, {...product, qty: 1}]);
//     }
//     console.log("Checked Out!");
// };

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

// <div>
//                   <button onClick={() => onCheckout(product)}>Checkout</button>
//                 </div>    