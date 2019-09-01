import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../login/actions/authAction";
import Logo from "../../images/logo.png";

import Home from "./home";
import Banner from "./banner";
import Prodoct from "./product";
import Ad from "./ad";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "home"
    };
    this.handleMode = this.handleMode.bind(this);
  }

  handleMode(e) {
    this.setState({ mode: e });
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    const { mode } = this.state;
    return (
      <main className="sub-container">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="navbar-brand" onClick={() => this.handleMode("home")}>
            <img src={Logo} width="30" height="30" alt="logo" />
          </div>
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
                  onClick={() => this.handleMode("banner")}
                >
                  Баннер
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
                  onClick={() => this.handleMode("ad")}
                >
                  Сурталчилгаа
                </button>
              </li>
            </ul>
            <button
              onClick={this.onLogoutClick}
              className="btn btn-outline-info my-2 my-sm-0 float-right"
              id="btn"
            >
              Гарах
            </button>
          </div>
        </nav>
        {mode === "home" ? (
          <Home user={user} />
        ) : mode === "banner" ? (
          <Banner />
        ) : mode === "product" ? (
          <Prodoct />
        ) : (
          <Ad />
        )}
      </main>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
