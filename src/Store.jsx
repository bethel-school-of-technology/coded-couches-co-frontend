import { useState } from 'react';
import Shop from './Components/pages/store/Shop';
import Cart from './Components/pages/cart/Cart';
//import data from './data';

function Store (props) {

    const { products } = props;
    console.log(products);
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


    return(
        <div>
            <Shop 
                products={products}
                onAdd={onAdd}
            />
            <Cart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
            />
        </div>
    );
}

export default Store;