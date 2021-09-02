import React from 'react';
import './App.css';
import AboutMe from './Components/AboutMe';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Shop from './Components/Shop';
import { BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
    
      <Route path="/" exact component={Home}></Route>
      <Route path="/about"  component={AboutMe}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/shop" component={Shop}></Route>
    
    </Router>
  );
}

export default App;
