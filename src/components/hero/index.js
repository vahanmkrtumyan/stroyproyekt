import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

import hero1 from "../../img/300.jpg";

import "./style.css";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero-area">
      <div className="hero-slider">
        {/* <div className="hero_arrows">
          <button className="button" onClick={this.previous}>
            <i className="fas fa-angle-left"></i>
          </button>
          <button className="button" onClick={this.next}>
            <i className="fas fa-angle-right"></i>
          </button>
        </div> */}

        {/* <Slider ref={(c) => (this.slider = c)} {...settings}> */}
        {/* <div className="slide"> */}
        <div
          className="hero-slide-item"
          style={{ backgroundImage: `url(${hero1})` }}
        >
          <div className="container">
            <div className="hero-text">
              <h2>
                {t("heroTitle1")} <br />
                {t("heroTitle2")}
              </h2>
              <div className="hero-action">
                <Link to="/projects" className="cta-btn btn-fill">
                  {t("seeProjects")}
                </Link>
                <Link to="/contact" className="cta-btn btn-border">
                  {t("contact")}
                </Link>
              </div>
            </div>
            <div className="video-main">
              <div className="promo-video">
                <div className="waves-block">
                  <div className="waves wave-1" />
                  <div className="waves wave-2" />
                  <div className="waves wave-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
