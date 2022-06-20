import React, { Component } from "react";
import moment from "moment";

import PortfolioContainer from "./portfolio/portfolio-container.js";
import NavigationContainer from "./navigation/navigation-container.js";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>Jorden Dickerson Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
