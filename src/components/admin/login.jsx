import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../login/actions/authAction";
import classnames from "classnames";
import Logo from "../../images/logopic.png";
import Word from "../../images/logowordblack.png";
import Bg from "../../images/bg.jpg";
import "./admin.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/admin/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(props, state) {
    if (props.auth.isAuthenticated) {
      this.props.history.push("/admin/dashboard"); // push user to dashboard when they login
    }
    if (props.errors !== this.state.errors) {
      this.setState({
        errors: props.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <article
        className="container-extended h-100"
        id="bg"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col shadow p-5" id="form">
            <img src={Logo} className="img-fluid" alt="logo" />
            <img src={Word} className="img-fluid" alt="word" />
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-group mt-4">
                <input
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  placeholder="Нэвтрэх нэр"
                  className={classnames("form-control", {
                    invalid: errors.username || errors.usernamenotfound
                  })}
                />
              </div>
              <span className="text-danger pl-2">
                {errors.username}
                {errors.usernamenotfound}
              </span>

              <div className="input-group">
                <input
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  type="password"
                  onChange={this.onChange}
                  value={this.state.password}
                  id="password"
                  placeholder="Нууц үг"
                  className={classnames("form-control", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
              </div>
              <span className="text-danger pl-2">
                {errors.password}
                {errors.passwordincorrect}
              </span>

              <div className="input-group justify-content-center">
                <button className="btn btn-primary mb-3" type="submit">
                  Нэвтрэх
                </button>
              </div>
            </form>
          </div>
        </div>
      </article>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
