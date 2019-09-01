import React, { Component } from "react";
import classnames from "classnames";
import { getProducts } from "../../actions/custAction";
import { uploadProduct, deleteProduct } from "../../login/actions/authAction";

class Product extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      count: "",
      products: [],
      toner: "",
      mark: "",
      printer: "",
      brand: "",
      price: "",
      page: "",
      file: null,
      errors: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.updateProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this._isMounted && prevState.products !== this.state.products) {
      this.updateProduct();
    }
  }
  componentWillMount() {
    this._isMounted = false;
  }
  clear = () => {
    this.setState({
      toner: "",
      mark: "",
      printer: "",
      brand: "",
      price: "",
      page: "",
      file: null
    });
  };

  updateProduct = () => {
    getProducts()
      .then(res => {
        this.setState({
          count: res.data.count,
          products: res.data.products
        });
      })
      .catch(err => console.log(err));
  };

  delete = index => {
    const product = this.state.products[index];
    deleteProduct(product).then(res => {
      if (res.data.ok) console.log(`${product.toner} устгагдлаа.`);
      this.updateProduct();
    });
  };

  products = () => {
    const toner = this.state.products.map(object => {
      return object.toner;
    });
    const printer = this.state.products.map(object => {
      return object.printer;
    });
    const brand = this.state.products.map(object => {
      return object.brand;
    });
    const price = this.state.products.map(object => {
      return object.price;
    });
    const page = this.state.products.map(object => {
      return object.page;
    });
    const mark = this.state.products.map(object => {
      return object.mark;
    });
    var body = new Array(this.state.count).fill(0).map((zero, index) => (
      <tr key={index} className="clickable-row">
        <th scope="row">{index + 1}</th>
        <td>{toner[index]}</td>
        <td>{mark[index]}</td>
        <td>{printer[index]}</td>
        <td>{brand[index]}</td>
        <td>{price[index]}</td>
        <td>{page[index]}</td>
      </tr>
    ));
    return body;
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
    data.append("toner", this.state.toner);
    data.append("mark", this.state.mark);
    data.append("printer", this.state.printer);
    data.append("brand", this.state.brand);
    data.append("price", this.state.price);
    data.append("page", this.state.page);
    data.append("product", this.state.file);
    uploadProduct(data)
      .then(res => console.log(res.data.message))
      .catch(err => console.log(err));
    this.clear();
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="row justify-content-center p-5">
        <div className="col-lg-4">
          <div className="shadow p-5">
            <h3 className="text-center p-3">Бүтээгдэхүүн нэмэх</h3>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-group mb-1 p-2">
                <input
                  aria-label="Toner"
                  aria-describedby="basic-addon1"
                  onChange={this.onChange}
                  value={this.state.toner}
                  error={errors.toner}
                  id="toner"
                  placeholder="Хорны нэр"
                  className={classnames("form-control", {
                    invalid: errors.toner
                  })}
                />
              </div>
              <div className="input-group mb-1 p-2">
                <input
                  aria-label="Mark"
                  aria-describedby="basic-addon1"
                  onChange={this.onChange}
                  value={this.state.mark}
                  error={errors.mark}
                  id="mark"
                  placeholder="Загвар"
                  className={classnames("form-control", {
                    invalid: errors.mark
                  })}
                />
                <input
                  aria-label="Brand"
                  aria-describedby="basic-addon1"
                  onChange={this.onChange}
                  value={this.state.brand}
                  error={errors.brand}
                  id="brand"
                  placeholder="Бренд"
                  className={classnames("form-control", {
                    invalid: errors.brand
                  })}
                />
              </div>
              <div className="input-group mb-1 p-2">
                <input
                  aria-label="Printer"
                  aria-describedby="basic-addon1"
                  onChange={this.onChange}
                  value={this.state.printer}
                  error={errors.printer}
                  id="printer"
                  placeholder="Таарах принтер"
                  className={classnames("form-control", {
                    invalid: errors.printer
                  })}
                />
              </div>
              <div className="input-group mb-1 p-2">
                <input
                  aria-label="Price"
                  aria-describedby="basic-addon1"
                  onChange={this.onChange}
                  value={this.state.price}
                  error={errors.price}
                  id="price"
                  placeholder="Үнэ"
                  className={classnames("form-control", {
                    invalid: errors.price
                  })}
                />
                <input
                  aria-label="Page"
                  aria-describedby="basic-addon1"
                  onChange={this.onChange}
                  value={this.state.page}
                  error={errors.page}
                  id="page"
                  placeholder="Хуудас"
                  className={classnames("form-control", {
                    invalid: errors.page
                  })}
                />
              </div>
              <div className="input-group mb-1 p-2">
                <input
                  type="file"
                  name="file"
                  aria-label="Image"
                  onChange={this.readFile}
                  error={errors.image}
                  id="image"
                  className={classnames("", {
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
        </div>

        <div className="col-md p-5">
          <h3 className="text-center p-3">Жагсаалт</h3>
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead>
                <tr className="table-success">
                  <th scope="col">#</th>
                  <th scope="col">Хорны нэр</th>
                  <th scope="col">Загвар</th>
                  <th scope="col">Принтерийн марк</th>
                  <th scope="col">Бренд</th>
                  <th scope="col">Үнэ</th>
                  <th scope="col">Хуудас</th>
                </tr>
              </thead>
              <tbody>{this.products()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
