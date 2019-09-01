import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../actions/custAction";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "",
      products: []
    };
  }

  componentDidMount() {
    getProducts()
      .then(res => {
        this.setState({
          count: res.data.count,
          products: res.data.products
        });
      })
      .catch(err => console.log(err));
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
    const deck = (index, count) => {
      var deck = [];
      for (var i = 0; i < count; i++) {
        deck.push(cards[index * count + i]);
      }
      return deck;
    };
    var view = window.innerWidth;
    var count = 0;
    view > 1200 ? (count = 3) : view > 960 ? (count = 2) : (count = 1);
    const deckCount = parseInt(this.state.count / count);
    const products = new Array(deckCount).fill(0).map((zero, index) =>
      index === 0 ? (
        <div className="carousel-item active" key={index}>
          <div className="card-deck">{deck(index, count)}</div>
        </div>
      ) : (
        <div className="carousel-item" key={index}>
          <div className="card-deck">{deck(index, count)}></div>
        </div>
      )
    );
    return products;
  };

  render() {
    return (
      <section className="carousel slide" data-ride="carousel" id="products">
        <div className="carousel-inner">{this.products()}</div>
        <div className="d-flex justify-content-end p-2">
          <Link
            to={{
              pathname: "/products",
              state: {
                products: this.state.products
              }
            }}
            className="btn btn-success btn mr-auto"
          >
            Бүх бүтээгдэхүүн
          </Link>
          <button
            className="btn btn-secondary btn-sm"
            data-target="#products"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="btn btn-secondary btn-sm"
            data-target="#products"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" />
            <span className="sr-only">Previous</span>
          </button>
        </div>
      </section>
    );
  }
}

export default Product;
