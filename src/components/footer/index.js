import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./style.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
              <div className="single-footer">
                <h3>About</h3>
                <p>
                  Precious ipsum dolor sit amet consectetur
                  <br /> adipisicing elit, sed dos mod tempor
                </p>
                <ul className="footer-contact">
                  <li>
                    <i className="fas fa-phone-square-alt" /> (444) 123 4567 89
                  </li>
                  <li>
                    <i className="fas fa-envelope" /> info@Stroyproyekt.am
                  </li>
                  <li>
                    <i className="fas fa-map" /> 74 South Doult Street, Dubai.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
              <div className="single-footer">
                <h3>{t("links")}</h3>
                <ul>
                  <li>
                    <Link to="/about">{t("about")}</Link>
                  </li>
                  <li>
                    <Link to="/projects">{t("projects")}</Link>
                  </li>
                  <li>
                    <Link to="/service">{t("services")}</Link>
                  </li>
                  <li>
                    <Link to="/">{t("contact")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fade_rule" />
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>Stroyproyekt 2022</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
