import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { Redirect, Route } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51JFCx4LyeqvsFykML4sKUEWVMc2Zr63ZplET4p9iVCdTW0t418d0E3dwY8rbnrNHT2hIE0VK2mGzbN1VvV00QGAA00LBo84cRt"
);

function ProdcutPrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        // console.log(props)
        localStorage.getItem("auth_token") ? (
          <Elements stripe={promise}>
            <Component {...props} />
          </Elements>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default ProdcutPrivateRoute;
