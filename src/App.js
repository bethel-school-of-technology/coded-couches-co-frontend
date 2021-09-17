import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Login from './Components/Login';
import Cart from './Components/Cart';
import Admin from './Components/Admin';
import Profile from "./Components/Profile";
import data from './data';
import Dashboard from "./pages/admin/Dashboard";
import Inventories from "./pages/admin/Inventories";
import Users from "./pages/admin/Users";
import CreateUser from "./pages/admin/CreateUser";
import EditUser from "./pages/admin/EditUser";
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
          <Route path="/dash">
            <Dashboard />
          </Route>
          <Route path="/inv">
            <Inventories />
          </Route>

          <Route path="/createuser">
            <CreateUser />
          </Route>
          <Route path="/edituser">
            <EditUser />
          </Route>

          <Route path="/users">
            <Users />
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
