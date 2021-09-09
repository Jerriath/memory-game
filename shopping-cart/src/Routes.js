import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Shop from "./components/Shop.js";
import Contact from "./components/Contact.js";




const Routes = () => {
  return (
    <Router>
      <Switch>
        <Nav />
        <Route exact path="/home" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  )
}

export default Routes;