import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
  //CREATES A DYNAMIC LINK
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink exact to={route} activeClassName="nav-link-active" s>
          {linkText}
        </NavLink>
      </div>
    );
  };
  //HANDLE SIGNING OUT
  const handleSignOut = () => {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch((error) => {
        console.log("An error occured while signing out: ", error);
      });
  };

  return (
    <div>
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink exact to="/about-me" activeClassName="nav-link-active">
              About
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink exact to="/contact" activeClassName="nav-link-active">
              Contact
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink exact to="/blog" activeClassName="nav-link-active">
              Blog
            </NavLink>
          </div>

          {props.loggedInStatus === "LOGGED_IN"
            ? dynamicLink("/portfolio-manager", "Portfolio Manager")
            : null}
        </div>
        <div className="right-side">
          JORDEN DICKERSON
          {props.loggedInStatus === "LOGGED_IN" ? (
            <a onClick={handleSignOut}>Sign Out</a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
