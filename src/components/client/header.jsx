import React, { Component } from "react";
import Logop from "../../images/logopic.png";
import Logow from "../../images/logoword.png";
import { Link } from "react-router-dom";
import "./header.css";
import "../../animate.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-extend-sm" id="nav">
          <div className="col-md">
            <Link className="btn btn-link" to="/">
              <img src={Logop} alt="pic" className="jackInTheBox" id="logo" />
            </Link>
            <Link className="btn btn-link" to="/">
              <img src={Logow} alt="word" className="" id="logo" />
            </Link>
          </div>
          <div className="col-sm d-flex justify-content-end"></div>
        </nav>

        <nav
          className="navbar navbar-expand-sm navbar-light bg-light"
          id="nav-menu"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nav-items"
            aria-controls="nav-items"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="nav-items">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => console.log(this)}
                >
                  Бидний тухай
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => this.handleMode("product")}
                >
                  Бүтээгдэхүүн
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => this.handleMode("product")}
                >
                  Компаний нийгмийн хариуцлага
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
