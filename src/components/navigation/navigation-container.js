import React from "react";
import {NavLink} from "react-router-dom";

const NavigationComponent = (props) => {
        return(
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
                            <NavLink exact to="/blog" activeClassName="nav-link-active"s>
                                 Blog
                            </NavLink>  
                        </div>
                    </div>
                    <div className="right-side">
                        JORDEN DICKERSON
                    </div>
                </div>
            </div>
        );
}

export default NavigationComponent;