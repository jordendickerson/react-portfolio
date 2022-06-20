import React from "react";
import { Link } from "react-router-dom";

import PortfolioContainer from "../portfolio/portfolio-container.js";

export default function() {
    return(
        <div>
            <h2>We couldn't find that page</h2>
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}