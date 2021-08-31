import logo from './logo.svg';
import './App.css';
import AboutMe from './Components/AboutMe';
import SignUp from './Components/SignUp';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    
      <Route path="/" exact component={SignUp}></Route>
      <Route path="/AboutMe"  component={AboutMe}></Route>
    
    </Router>
  );
}

export default App;
