import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../login/actions/authAction";
import classnames from "classnames";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/admin/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <article className="container">
        <div className="row justify-content-sm-center m-5">
          <div className="col-sm-5">
            <div className="sub-container-sm shadow p-4 mb-5 bg-white rounded">
              <center>
                <h4>
                  <b>Register</b> below
                </h4>
                <p className="text-secondary">
                  Already have an acc?{" "}
                  <Link className="highlight" to="/admin">
                    {" "}
                    Log In
                  </Link>
                </p>
              </center>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-group p-2">
                  <input
                    onChange={this.onChange}
                    value={this.state.username}
                    error={errors.username}
                    id="username"
                    type="text"
                    placeholder="Username"
                    className={classnames("form-control", {
                      invalid: errors.username
                    })}
                  />
                </div>
                <span className="text-danger">{errors.username}</span>

                <div className="input-group p-2">
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    placeholder="Password"
                    className={classnames("form-control", {
                      invalid: errors.password
                    })}
                  />
                </div>
                <span className="text-danger">{errors.password}</span>

                <div className="input-group p-2">
                  <input
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    type="password"
                    placeholder="Confirm password"
                    className={classnames("form-control", {
                      invalid: errors.password2
                    })}
                  />
                </div>
                <span className="text-danger">{errors.password2}</span>

                <div className="input-group justify-content-md-center">
                  <button className="btn btn-primary m-2" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
