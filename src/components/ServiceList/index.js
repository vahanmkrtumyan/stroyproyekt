import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// import serviceImg1 from "../../img/service-image-1.jpg";
// import serviceImg2 from "../../img/service-image-2.webp";
import serviceImg3 from "../../img/nadzor.jpg";
import serviceImg4 from "../../img/4.jpg";
import serviceImg5 from "../../img/consult.jpg";
// import serviceImg6 from "../../img/service-image-6.jpg";
// import serviceImg7 from "../../img/service-image-7.webp";
// import serviceImg8 from "../../img/service-image-8.jpg";
// import serviceImg9 from "../../img/service-image-9.jpg";
import serviceImg10 from "../../img/service-image-10.jpg";
import serviceImg11 from "../../img/service-image-11.jpg";
// import serviceImg12 from "../../img/service-image-12.jpg";
// import serviceImg13 from "../../img/service-image-13.jpg";

import "./style.css";

const ServiceList = () => {
  const { t } = useTranslation();

  return (
    <section className="service-area service-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <Link to="service-single/service1">
              <div
                className="service-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-icon"></div>
                <div className="service-text">
                  <p>{t("service1")}</p>
                </div>
                <img src={serviceImg10} alt="img" />
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6">
            <Link to="service-single/service2">
              <div
                className="service-box"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="service-icon"></div>
                <div className="service-text">
                  <p>{t("service2")}</p>
                </div>
                <img src={serviceImg11} alt="img" />
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6">
            <Link to="service-single/service3">
              <div
                className="service-box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-icon"></div>
                <div className="service-text">
                  <p>{t("service3")}</p>
                </div>
                <img src={serviceImg3} alt="img" />
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6">
            <Link to="service-single/service4">
              <div
                className="service-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-icon"></div>
                <div className="service-text">
                  <p>{t("service4")}</p>
                </div>
                <img src={serviceImg4} alt="img" />
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6">
            <Link to="service-single/service5">
              <div
                className="service-box"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="service-icon"></div>
                <div className="service-text">
                  <p>{t("service5")}</p>
                </div>
                <img src={serviceImg5} alt="img" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceList;
