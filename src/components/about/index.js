import React from "react";
import { useTranslation } from "react-i18next";

import bg from "../../img/about-bg.png";
import img1 from "../../img/301.jpg";
import img2 from "../../img/about-2.jpg";

import "./style.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-area" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="about-left" data-aos="fade-right">
              <div className="site-heading">
                {/* <h3 className="sub-title">{t("about")}</h3> */}
                <h2 className="section-title">{t("about")}</h2>
              </div>
              <p>{t("about1")}</p>
              <p>{t("about2")}</p>
              <p>{t("about3")}</p>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="about-right" data-aos="fade-left">
              <img className="about_img_1" src={img2} alt="img" />
              <img className="about_img_2" src={img1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
