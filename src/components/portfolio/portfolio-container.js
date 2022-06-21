import React, { Component } from "react";
import axios from "axios";


import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);

    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems(){
        return this.state.data.map(item => {
            return <PortfolioItem key={item.id} item = {item} />;
        })
    }

    getPortfolioItems(){
        // Make a request for a user with a given ID
        axios.get('https://jordendickerson.devcamp.space/portfolio/portfolio_items')
        .then(response => {
          // handle success
          this.setState({
            data: response.data.portfolio_items
          })
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
      }

    componentDidMount(){
    this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading){
            return <div>Loading...</div>;
        }

        return(
            <div>
                
                
                <div className="portfolio-items-wrapper">
                    <button className="btn" onClick={() => this.handleFilter('Technology')}>Technology</button>
                    <button className="btn" onClick={() => this.handleFilter('Social Media')}>Social Media</button>
                    <button className="btn" onClick={() => this.handleFilter('Software')}>Software</button>

                {this.portfolioItems()}
                </div>
            </div>
        )
    }
}