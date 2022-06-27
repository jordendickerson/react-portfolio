import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      portfolioToEdit: {}
    };

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
  }

  clearPortfolioToEdit() {
    this.setState({
      portfolioToEdit: {}
    });
  }

  handleEditClick(portfolioItem) {
    this.setState({
      portfolioToEdit: portfolioItem
    })
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

  handleEditFormSubmission(){
    this.getPortfolioItems();
  }

  handleNewFormSubmission(portfolioItem) {
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
              handleNewFormSubmission={
                this.handleNewFormSubmission
              }
              handleEditFormSubmission={
                this.handleEditFormSubmission
              }
              handleFormSubmissionError={this.handleFormSubmissionError}
              clearPortfolioToEdit={this.clearPortfolioToEdit}
              portfolioToEdit={this.state.portfolioToEdit}
            />
          </div>
          <div className="sidebar-wrapper">
            <PortfolioSidebarList
              handleDeleteClick={this.handleDeleteClick}
              data={this.state.data}
              handleEditClick = {this.handleEditClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
