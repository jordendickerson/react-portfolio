import React, { Component } from "react";
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PortfolioContainer from "./portfolio/portfolio-container.js";
import NavigationContainer from "./navigation/navigation-container.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Blog from "./pages/blog.js";
import PortfolioDetail from "./portfolio/portfolio-detail.js";
import NoMatch from "./pages/no-match.js";


export default class App extends Component {
  constructor(){
    super();

  }

  
  
  render() {
    return (
      <div className='app'>

        
        <Router>
          <div>

            <h1>Jorden Dickerson Portfolio</h1>
            <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>   
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
