import React, { Component } from "react";
import Header from "./header";
import Banner from "./banner";
import Product from "./product";
import Advertisement from "./advertisement";
import Advantage from "./advantage";
import Footer from "./footer";

import "./customer.css";
class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-extended" id="customer">
        <Header />
        <Banner />
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h3 className="title">Онцлох бүтээгдэхүүнүүд</h3>
              <Product />
              <h3 className="title">Манай давуу талууд</h3>
              <Advantage />
            </div>
            <div className="col-4">
              <Advertisement />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Customer;
