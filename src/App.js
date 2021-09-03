import React from 'react';
import './App.css';
import AboutMe from './Components/AboutMe';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Shop from './Components/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav>
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
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
