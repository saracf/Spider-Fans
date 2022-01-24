import { Switch, Route, Link, Router } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Villan } from "./pages/Villan";
import { Register } from "./pages/Register";

export default function Routes() {
  return (
    <>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/villan">
            <Villan/>
          </Route>    
          <Router exact path="/register">
            <Register/>
          </Router>
        </Switch>
    </>
  );
}