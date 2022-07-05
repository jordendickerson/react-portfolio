import axios from "axios";
import React, { Component } from "react";

// banner_image_url: "https://devcamp-space.s3.amazonaws.com/AvF7h6EBsWaSWYwJAJAeVLjx?response-content-disposition=inline%3B%20filename%3D%22crondose.jpg%22%3B%20filename%2A%3DUTF-8%27%27crondose.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20220705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220705T172803Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=53ebed5ca196c417c93a0d7f8e17de09dd88f8f9a5c5d34c61308472bc10b3e5"
// category: "Technology"
// column_names_merged_with_images: (9) ['id', 'name', 'description', 'url', 'category', 'position', 'thumb_image', 'banner_image', 'logo']
// description: "Online tutorials and productivity tips."
// id: 34263
// logo_url: "https://devcamp-space.s3.amazonaws.com/WrkdwVUtp23GEfjQCFLxA5gA?response-content-disposition=inline%3B%20filename%3D%22crondose.png%22%3B%20filename%2A%3DUTF-8%27%27crondose.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20220705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220705T172803Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=30c48d56d332600c35d307c75eb0698a030bae69c215a5d109f0237c0a408d12"
// name: "Crondose"
// position: 4
// thumb_image_url: "https://devcamp-space.s3.amazonaws.com/XR5jz6fsnZUfTbmNz4xipWLk?response-content-disposition=inline%3B%20filename%3D%22crondose.jpg%22%3B%20filename%2A%3DUTF-8%27%27crondose.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20220705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220705T172803Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=cd587a56451b568543515f3c029e76677ec8c6d275de4201f9aaab063625851c"
// url: "https://www.crondose.com"

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      portfolioItem : {}
    };

    this.getPortfolioItem = this.getPortfolioItem.bind(this);
  }

  getPortfolioItem() {
    axios.get(
      `https://jordendickerson.devcamp.space/portfolio/portfolio_items/${this.state.currentId}`, {withCredentials: true}
    ).then(response => {
        this.setState({
            portfolioItem: response.data.portfolio_item
        })
    }).catch(error => {
        console.log('error from portfolio detail', error);
    });
  }

  componentDidMount(){
    this.getPortfolioItem();
  }

  render() {
    const {
        banner_image_url,
        category,
        description,
        logo_url,
        name,
        thumb_image_url,
        url,
    } = this.state.portfolioItem;

    return (
        <div className="portfolio-detail-wrapper">
            <div className="banner-wrapper">
                <div className="title-description-wrapper">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            <div className="image"><img src={banner_image_url} /></div>
        </div>

            <div className="portfolio-description-detail-wrapper">
                <div className="description">
                {description}
                </div>
            </div>
            
            <div className="bottom-content-wrapper">
                <a href={url} className="site-link" target="_blank">
                    Visit {name}
                </a>
            </div>
        </div>
    );
  }
}
