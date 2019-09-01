import React, { Component } from "react";
import Adv from "../../images/zorilt.svg";
import Brand from "../../images/brand.svg";
import Maz1 from "../../images/mazaalai-1.svg";
import Maz2 from "../../images/mazaalai-2.svg";
class Advantage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="container-extended" id="advantage">
        <div className="row">
          <img src={Brand} alt="brand" style={{ width: 50 }} />
          <div className="col-md">
            <h5 className="font-italic">"МАЗААЛАЙ" бренд</h5>
            <p>
              Чанар, хэвлэх хуудасны тооны хувьд бусад брендийн принтерийн
              хорноос 50-100/ 100-300 хуудасны илүү хэвлэлттэй сайн чанарын
              үндэсний үйлдвэрлэл, ПРИНТЕРИЙН ХОР ЦЭНЭГЛЭХ үйлчилгээг чанарын
              өндөр түвшинд гүйцэтгэн ажиллаж байна
            </p>
          </div>
          <img src={Maz1} alt="maz1" style={{ width: 50 }} />
          <div className="col-md">
            <h5 className="font-italic">"Мазаалай-1" төсөл</h5>
            <p>
              Хог хаягдлыг дахин боловсруулах чиглэлээр байгал орчинд ээлтэй
              төсөл.
              <span className="btn btn-link" id="link">
                {"  "}
                Нэмэлт мэдээлэл
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <img src={Adv} alt="adv" style={{ width: 50 }} />
          <div className="col-md">
            <h5 className="font-italic">Бидний зорилт</h5>
            <p>
              АСТА брендийн принтерийн хорыг УБ хотын үнээр эцсийн хэрэглэгчдэд
              нийлүүлэх
            </p>
          </div>
          <img src={Maz2} alt="maz2" style={{ width: 50 }} />
          <div className="col-md">
            <h5 className="font-italic">"Мазаалай-2" төсөл</h5>
            <p>
              2019 оноос эхлэн байгаль орчинд 60-100 жилд устдаггүй пластмасан
              бүтээгдэхүүнийг дахин боловсруулан нэмүү өртөг шингэсэн
              бүтээгдэхүүн үйлдвэрлэх зорилт тавин ажиллаж байна.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Advantage;
