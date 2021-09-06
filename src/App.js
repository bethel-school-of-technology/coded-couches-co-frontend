import React from 'react';
import './App.css';
import logo from './Images/logo.jpg';
import AboutMe from './Components/AboutMe';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Login from './Components/Login';
import Admin from './Components/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from './Components/Cart';



function App() {
  return (
    <Router>
      <div>
        <nav>
        <img className="logo" src={logo} alt="logo" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/cart">
            <Cart />
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
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
