import React, { Component } from 'react';
import '../styles/App.css';
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import BaseLayout from "./BaseLayout";
import Contact from "./Contact";
import References from "./References";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route path="/about" component={About}></Route>
              <Route path="/portfolio" component={Portfolio}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/references" component={References}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
