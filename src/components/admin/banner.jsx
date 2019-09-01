import React, { Component } from "react";
import classnames from "classnames";
import { getBanners } from "../../actions/custAction";
import { uploadBanner, deleteBanner } from "../../login/actions/authAction";

class Banner extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      count: "",
      banners: [],
      name: "",
      file: null,
      errors: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.updateBanner();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this._isMounted && prevState.banners !== this.state.banners) {
      this.updateBanner();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  clear = () => {
    this.setState({
      name: "",
      file: null
    });
  };

  updateBanner = () => {
    getBanners()
      .then(res => {
        this.setState({
          count: res.data.count,
          banners: res.data.banners
        });
      })
      .catch(err => console.log(err));
  };

  delete = index => {
    const banner = this.state.banners[index];
    deleteBanner(banner).then(res => {
      if (res.data.ok) console.log(`${banner.name} устгагдлаа.`);
      this.updateBanner();
    });
  };

  banners = () => {
    const names = this.state.banners.map(object => {
      return object.name;
    });
    var banners = new Array(this.state.count).fill(0).map((zero, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{names[index]}</td>
        <td>
          <button
            className="btn btn-link"
            id="link"
            onClick={() => this.delete(index)}
          >
            Устгах
          </button>
        </td>
      </tr>
    ));
    return banners;
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  readFile = e => {
    this.setState({
      file: e.target.files[0],
      loaded: 0
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", this.state.name);
    data.append("banner", this.state.file);
    uploadBanner(data)
      .then(res => console.log(res.data.message))
      .catch(err => console.log(err));
    this.clear();
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="row justify-content-center p-5">
        <div className="col-lg-4 shadow p-5">
          <h3 className="text-center p-3">Баннер нэмэх</h3>

          <form noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                aria-label="Name"
                aria-describedby="basic-addon1"
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                placeholder="Баннерийн нэр"
                className={classnames("form-control", {
                  invalid: errors.name
                })}
              />
            </div>
            <div className="form-group">
              <input
                type="file"
                name="file"
                aria-label="Image"
                onChange={this.readFile}
                error={errors.image}
                id="image"
                className={classnames("file-input", {
                  invalid: errors.image
                })}
              />
            </div>
            <div className="input-group justify-content-center">
              <button className="btn btn-success mt-3" type="submit">
                Нэмэх
              </button>
            </div>
          </form>
        </div>
        <div className="col-md p-5">
          <h3 className="text-center">Жагсаалт</h3>

          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead>
                <tr className="table-success">
                  <th scope="col">#</th>
                  <th scope="col">Нэр</th>
                  <th scope="col">Тайлбар</th>
                </tr>
              </thead>
              <tbody>{this.banners()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
