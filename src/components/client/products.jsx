import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "./banner";
import Header from "./header";
import "./customer.css";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "",
      products: []
    };
  }
  componentDidMount() {
    this.setState(this.props.location.state);
  }
  products = () => {
    const cards = this.state.products.map(object => {
      return (
        <div className="card" key={object.toner}>
          <img
            className="card-img-top"
            src={"/" + object.image}
            alt="product"
          />
          <div className="card-body">
            <p className="card-title font-weight-bold">{object.toner}</p>
            <small className="card-text">{object.printer}</small>
            <Link
              to={{
                pathname: "/product",
                state: {
                  toner: object.toner,
                  printer: object.printer,
                  brand: object.brand,
                  price: object.price,
                  page: object.page,
                  image: object.image
                }
              }}
              className="stretched-link"
            >
              Захиалах
            </Link>
          </div>
        </div>
      );
    });
    return cards;
  };
  render() {
    return (
      <div className="container-extended" id="products">
        <Header />
        <Banner />
        <div className="card-columns" id="card-columns">
          {this.products()}
        </div>
      </div>
    );
  }
}

export default Products;
