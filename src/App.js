<<<<<<< HEAD
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages';
import "bootstrap/dist/css/bootstrap.min.css";
=======
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
>>>>>>> c11c9d745092240446451c1cb146f2784ec12c91

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
