import React from 'react';
import './App.css';
import AboutMe from './Components/AboutMe';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import { BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
    
      <Route path="/" exact component={Home}></Route>
      <Route path="/AboutMe"  component={AboutMe}></Route>
      <Route path="/SignUp" component={SignUp}></Route>
    
    </Router>
  );
}

export default App;
