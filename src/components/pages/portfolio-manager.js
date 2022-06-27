import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };

    this.handleSuccessfulFormSubmission =
      this.handleSuccessfulFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(portfolioItem) {
    axios.delete(
      `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
      { withCredentials: true }
    ).then(response => {
      this.setState({
        data: this.state.data.filter(item => {
          return item.id !== portfolioItem.id;
        })
      })

      return response.data;
    }).catch(error => {
      console.log("Error from handleDeleteClick", error);
    })
  }

  handleSuccessfulFormSubmission(portfolioItem) {
    this.setState({
      data: [portfolioItem].concat(this.state.data),
    });
  }

  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError error", error);
  }

  getPortfolioItems() {
    axios
      .get(
        "https://jordendickerson.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc",
        {
          withCredentials: true,
        }
      ) //calls the portfolio items from the API
      .then((response) => {
        //sets the data state to the portfolio items from the API
        this.setState({
          data: [...response.data.portfolio_items],
        }).catch((error) => {
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
            <PortfolioForm
              handleSuccessfulFormSubmission={
                this.handleSuccessfulFormSubmission
              }
              handleFormSubmissionError={this.handleFormSubmissionError}
            />
          </div>
          <div className="sidebar-wrapper">
            <PortfolioSidebarList
              handleDeleteClick={this.handleDeleteClick}
              data={this.state.data}
            />
          </div>
        </div>
      </div>
    );
  }
}
