import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/prime">
            <Header/>
            <h1>Prime</h1>
          </Route>
          <Route path="/orders">
            <Header/>
            <h1>Orders</h1>
          </Route>
          <Route path="/login">
            <Header/>
            <h1>Login page</h1>
          </Route>
          {/* This is the default route */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
