import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTrash, faSignOutAlt} from "@fortawesome/free-solid-svg-icons"

const PortfolioSidebarList = (props) => {
  const portfolioList = props.data.map((portfolioItem) => {
    return (
      <div key={portfolioItem.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <img
            src={portfolioItem.thumb_image_url}
            alt="Thumbnail Image"
          />
        </div>

        <div className="portfolio-item-text">
          <div className="title">{portfolioItem.name}</div>

          <div className="actions">
            <a className="action-icon" onClick={() => props.handleEditClick(portfolioItem)}>
              <FontAwesomeIcon icon="edit" />
            </a>
            
            <a className="action-icon" onClick={() => props.handleDeleteClick(portfolioItem)}>
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;
