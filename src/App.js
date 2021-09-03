import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages";
import ProductsPage from "./pages/products";

function App() {
  return (
    <Router>
      <Switch>
        <Route path ="/" component = {Home} exact />
        <Route path ="/products" component = {ProductsPage}/>
      </Switch>
    </Router>
  );
}

export default App;
