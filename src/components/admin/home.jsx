import React, { Component } from "react";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user } = this.props;
    return (
      <h4 className="overlay">
        <span>
          <b>Тавтай морилно уу</b>{" "}
        </span>
        <span>{user.username.split(" ")[0]}</span>{" "}
        <span className="text-primary">та амжилттай нэвтэрлээ.</span>
      </h4>
    );
  }
}

export default Home;
