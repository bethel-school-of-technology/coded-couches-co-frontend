import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import AboutMe from './components/pages/AboutMe';
import SignUp from './components/pages/user/SignUp';
import Home from './components/pages/Home';
import Shop from './components/pages/store/Shop';
import Login from './components/pages/user/Login';
import Cart from './components/pages/cart/Cart';
import Admin from './components/pages/admin/Admin';
import Profile from "./components/pages/user/Profile";
import data from './data';
import { useState } from 'react';

function App() {
  const { products } = data;
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

  return (
    <div>
      <Router>
        <Navbar countCartItems={cartItems.length}></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/shop">
            <Shop 
              products={products} 
              onAdd={onAdd}>
            </Shop>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/cart">
            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}>
            </Cart>
          </Route>
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
