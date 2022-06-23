import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  getPortfolioItems() {
    axios
      .get("https://jordendickerson.devcamp.space/portfolio/portfolio_items", {
        withCredentials: true,
      }) //calls the portfolio items from the API
      .then((response) => {
        //sets the data state to the portfolio items from the API
        console.log('response from portfolioitems', response);
        this.setState({
          data: [...response.data.portfolio_items]
        }).catch(error => {
          console.log("error in getPortfolioItems:", error);
        });
      });
  }

  //when this page loads in the app, componentDidMount executes
  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div>
        <div className="form-sidebar-wrapper">
          <div className="form-wrapper">
            <h1>PORTFOLIO FORM</h1>
          </div>
          <div className="sidebar-wrapper">
            <PortfolioSidebarList data={this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
}
