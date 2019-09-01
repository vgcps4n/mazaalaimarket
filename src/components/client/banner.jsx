import React, { Component } from "react";
import "./customer.css";
import { getBanners } from "../../actions/custAction";
class Banner extends Component {
  constructor(props) {
    super(props);
    this.banner = React.createRef();
    this.state = {
      count: "",
      banners: []
    };
  }

  componentDidMount() {
    getBanners()
      .then(res => {
        this.setState({
          count: res.data.count,
          banners: res.data.banners
        });
      })
      .catch(err => console.log(err));
  }

  indicators = () => {
    var li = new Array(this.state.count)
      .fill(0)
      .map((zero, index) =>
        index === 0 ? (
          <li
            data-target="#banner"
            data-slide-to={index}
            key={index}
            className="active"
            id="carousel-dot"
          />
        ) : (
          <li
            data-target="#banner"
            data-slide-to={index}
            key={index}
            id="carousel-dot"
          />
        )
      );
    return <ol className="carousel-indicators">{li}</ol>;
  };

  banners = () => {
    const paths = this.state.banners.map(object => {
      return "/" + object.image;
    });
    var img = new Array(this.state.banners.length).fill(0).map((zero, index) =>
      index === 0 ? (
        <div className="carousel-item active" key={index}>
          <img src={paths[index]} alt={index} className="d-block w-100" />
        </div>
      ) : (
        <div className="carousel-item" key={index}>
          <img src={paths[index]} alt={index} className="d-block w-100" />
        </div>
      )
    );
    return img;
  };

  render() {
    return (
      <div
        id="banner"
        className="carousel slide"
        data-ride="carousel"
        ref={this.banner}
      >
        {this.indicators()}
        <div className="carousel-inner">{this.banners()}</div>
        <a
          className="carousel-control-prev"
          href="#banner"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#banner"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Banner;
