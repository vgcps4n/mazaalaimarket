import React, { Component } from "react";
import Header from "./header";
class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toner: "",
      printer: "",
      brand: "",
      price: "",
      page: "",
      image: ""
    };
  }
  componentDidMount() {
    this.setState(this.props.location.state);
  }
  render() {
    return (
      <div className="container-extended" id="product">
        <Header />
        <div className="row">
          <div className="col-md-6 col-lg-5 col-xl-5">
            <img
              src={"/" + this.state.image}
              alt="product"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 col-lg-7 col-xl-6 col-xl-offset-1 p-5">
            <h3 className="display-4">{this.state.toner}</h3>
            <p className="lead">Тохирох принтер: {this.state.printer}</p>
            <p className="lead">Бренд: {this.state.brand}</p>
            <hr className="my-4" />
            <p className="lead">
              Үнэ: {this.state.price}, Хэвлэлт: {this.state.page}
            </p>
            <button className="btn btn-success">Захиалах</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Single;
