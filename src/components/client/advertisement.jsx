import React, { Component } from "react";
class Advertisement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  advertisements = () => {};
  render() {
    return <div className="card-columns">{this.advertisements()}</div>;
  }
}

export default Advertisement;
