import React from "react";
import { withRouter } from "../../Services/withRouter";
import { Link } from "react-router-dom";
import example from "./imageproduct.jpg";
import "./Product.css";

class ProductCard extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.props.navigate(`/productos/${this.props.productId}`);
  };

  render() {
    return (
      <>
        <div onClick={this.handleClick} className="main_container_card_product">
          <div className="container_card_product">
            <img className="image_card_product" src={example} alt="" />
          </div>
          <div className="container_price_card_product">
            <Link
              className="product_title_card"
              to={`/productos/${this.props.productId}`}
            >
              {this.props.productName}
            </Link>
            <p className="product_price_card">{this.props.productPrice}</p>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ProductCard);
