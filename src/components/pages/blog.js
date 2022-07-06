import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogModal from "../modals/blog-modal.js";

import BlogItem from "../blog/blog-item";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true,
      showModal: false,
    };

    this.getBlogItems = this.getBlogItems.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSuccessfulNewBlogSubmission =
      this.handleSuccessfulNewBlogSubmission.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    window.addEventListener("scroll", this.onScroll, false);
  }

  handleDeleteClick(blog) {
    axios
      .delete(
        `https://jordendickerson.devcamp.space/portfolio/portfolio_blogs/${blog.id}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          blogItems: this.state.blogItems.filter(blogItem => {
            return blog.id != blogItem.id
          })
        })

        return response.data;
      }).catch(error => {
        console.log('error in blog delete', error);
      });
  }

  handleSuccessfulNewBlogSubmission(blog) {
    this.setState({
      showModal: false,
      blogItems: [blog].concat(this.state.blogItems),
    });
  }

  handleOpenModal() {
    this.setState({
      showModal: true,
    });
  }

  handleCloseModal() {
    this.setState({
      showModal: false,
    });
  }

  onScroll() {
    if (
      this.state.isLoading ||
      this.state.blogItems.length === this.state.totalCount
    ) {
      return;
    }

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      this.getBlogItems();
    }
  }

  getBlogItems() {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });

    axios
      .get(
        `https://jordendickerson.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`,
        { withCredentials: true }
      )
      .then((response) => {
        console.log("getting", response.data);
        this.setState({
          blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
          totalCount: response.data.meta.total_records,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("getBlogItems error", error);
      });
  }

  componentWillMount() {
    this.getBlogItems();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  render() {
    const blogRecords = this.state.blogItems.map((blogItem) => {
      if (this.props.loggedInStatus === "LOGGED_IN") {
        return (
          <div key={blogItem.id} className="admin-blog-wrapper">
            <BlogItem blogItem={blogItem} />
            <a onClick={() => this.handleDeleteClick(blogItem)}>
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        );
      } else {
        return <BlogItem key={blogItem.id} blogItem={blogItem} />;
      }
    });

    return (
      <div className="blog-container">
        <BlogModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          handleSuccessfulNewBlogSubmission={
            this.handleSuccessfulNewBlogSubmission
          }
        />
        {this.props.loggedInStatus === "LOGGED_IN" ? (
          <div className="new-blog-link">
            <a onClick={this.handleOpenModal}>
              <FontAwesomeIcon icon="plus-circle" />
            </a>
          </div>
        ) : null}
        <div className="content-container">{blogRecords}</div>
        {this.state.isLoading ? (
          <div className="content-loader">
            <FontAwesomeIcon icon="spinner" spin />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Blog;
