import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import AboutMe from "./Components/pages/AboutMe";
import SignUp from './Components/pages/user/SignUp';
import Home from './Components/pages/Home';
import Shop from './Components/pages/store/Shop';
import Login from './Components/pages/user/Login';
import Cart from './Components/pages/cart/Cart';
import Profile from "./Components/pages/user/Profile";
import Dashboard from "./Components/pages/admin/Dashboard";
import Inventories from "./Components/pages/admin/Inventories";
import Users from "./Components/pages/admin/Users";
import CreateUser from "./Components/pages/admin/CreateUser";
import EditUser from "./Components/pages/admin/EditUser";
import CreateInventory from "./Components/pages/admin/CreateInventory";
import EditInventory from "./Components/pages/admin/EditInventory";
import Footer from "./Components/Footer";


function App() {

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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/admin/dashboard">
            <Dashboard />
          </Route>
          <Route path="/admin/inventory/create">
            <CreateInventory />
          </Route>
          <Route path="/admin/inventory/edit">
            <EditInventory />
          </Route>
          <Route path="/admin/inventory">
            <Inventories />
          </Route>
          <Route path="/admin/users/create">
            <CreateUser />
          </Route>
          <Route path="/admin/user/edit">
            <EditUser />
          </Route>
          <Route path="/admin/users">
            <Users />
          </Route>
          <Route path="/cart" component={Cart}/>
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
