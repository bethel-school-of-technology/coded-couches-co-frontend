import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Login from './Components/Login';
import Cart from './Components/Cart';
import Admin from './Components/Admin';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={AboutMe} />
          <Route path="/shop" component={Shop}></Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/cart" component={Cart}></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;