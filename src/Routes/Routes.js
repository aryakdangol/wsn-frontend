import React from "react";
import { Route, Switch } from "react-router";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/Signup";
import Home from "../pages";
import ProductsPage from "../components/Products/index";
import PrivateRoute from "./PrivateRoute";
import DonatePage from "../pages/donate";
import MyOrders from "../components/Orders/MyOrders";
import ProdcutPrivateRoute from "./ProdcutPrivateRoute";
import About from "../pages/about";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <ProdcutPrivateRoute path="/products" component={ProductsPage} />
      <PrivateRoute path="/donate" component={DonatePage} />
      <PrivateRoute path="/orders" component={MyOrders} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
}

export default Routes;
