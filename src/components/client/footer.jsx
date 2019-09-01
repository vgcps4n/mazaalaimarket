import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="container-extended pt-5">
        <div className="row">
          <div className="col-sm">
            <ul>
              <li>
                <p>Бүтээгдэхүүн</p>
              </li>
              <li>
                <p>
                  <a href="https://www.astatoner.com">ASTA</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://www.astatoner.com">МАЗААЛАЙ</a>
                </p>
              </li>
            </ul>
          </div>
          <div className="col-sm">
            <ul>
              <li>
                <p>Компани</p>
              </li>
              <li>
                <p>
                  <a href="https://www.astatoner.com">Бидний тухай</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://www.astatoner.com">Бидэнтэй холбогдох</a>
                </p>
              </li>
            </ul>
          </div>
          <div className="col-sm">
            <ul>
              <li>
                <p>Нэмэлт мэдээлэл</p>
              </li>
            </ul>
          </div>
          <div className="col-sm">
            <ul>
              <li>
                <p>Тусламж үйлчилгээ</p>
              </li>
              <li>
                <p>
                  <a href="https://www.astatoner.com">Support</a>
                </p>
              </li>
            </ul>
          </div>
          <div className="col-sm">
            <ul>
              <li>
                <p>Холбогдох</p>
              </li>
              <li>
                <p>
                  <a href="https://www.astatoner.com">Facebook</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <p className="text-center copy">
              Copyright &copy; 2019 Элит Хангамж ХХК. All rights served.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
