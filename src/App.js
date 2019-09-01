import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRouter from "./login/private/privateroute";

import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./login/utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./login/actions/authAction";

import Login from "./components/admin/login";
import Register from "./components/admin/register";
import Dashboard from "./components/admin/dashboard";
import Customer from "./components/client/customer";
import Single from "./components/client/singleProduct";
import Products from "./components/client/products";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./components/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container-extended">
            <div className="row vh-100">
              <div className="col">
                <Switch>
                  <Route exact path="/" component={Customer} />
                  <Route exact path="/product" component={Single} />
                  <Route exact path="/products" component={Products} />
                  <Route exact path="/admin" component={Login} />
                  <Route exact path="/admin/register" component={Register} />
                  <PrivateRouter
                    exact
                    path="/admin/dashboard"
                    component={Dashboard}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
