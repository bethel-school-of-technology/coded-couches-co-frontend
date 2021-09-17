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
import Dashboard from "./components/pages/admin/Dashboard";
import Inventories from "./components/pages/admin/Inventories";
import Users from "./components/pages/admin/Users";
import CreateUser from "./components/pages/admin/CreateUser";
import EditUser from "./components/pages/admin/EditUser";
import CreateInventory from "./components/pages/admin/CreateInventory";
import EditInventory from "./components/pages/admin/EditInventory";

// import { useState } from 'react';
// import data from './data';

function App() {
  // const { products } = data;
  // const [cartItems, setCartItems] = useState([]);
  
  // const onAdd = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };
  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/shop" component={Shop}/>
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
          <Route path="/createinv">
            <CreateInventory />
          </Route>
          <Route path="/editinv">
            <EditInventory />
          </Route>

          <Route path="/users">
            <Users />
          </Route>
          <Route path="/cart" component={Cart}/>
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
