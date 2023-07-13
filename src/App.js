import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Market from "./pages/Market";
import Details from "./pages/Details";
import Cart from "./components/Cart";
import Default from "./pages/Default";
import Modal from './components/Modal';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AnimatedCursor  from "./styles/AnimatedCursor";
import Customize from "./pages/Customize"

function App() {
  return (
    <React.Fragment>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/market" component={Market} />
          <Route path="/customize" component={Customize} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      <Modal />
      
    </React.Fragment>
  );
}

export default App;



/*
function App() {
  return (
    <React.Fragment>
      <AnimatedCursor
            innerSize={15}
            outerSize={15}
            color="255, 255 ,255"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5}
      />
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/market" component={Market} />
          <Route path="/customize" component={Customize} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      <Modal />
      
    </React.Fragment>
  );
}
*/