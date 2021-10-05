import React from "react";
import { Route, Switch } from "react-router";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/Signup";
import Home from "../pages";
import ProductsPage from "../components/Products/index";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <PrivateRoute path="/products" component={ProductsPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
}

export default Routes;
