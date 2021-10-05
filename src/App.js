import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";

import Routes from "./Routes/Routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    return () => {
      window.addEventListener("beforeunload", function (e) {
        return localStorage.removeItem("auth_token");
      });
    };
  });
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
