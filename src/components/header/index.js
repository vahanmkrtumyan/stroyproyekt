import Logo from "../../img/logo.png";
import { MobileMenu } from "../../components/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import russia from "../../img/russia.svg";
import armenia from "../../img/armenia.svg";

import "./style.css";

const Header = () => {
  let location = useLocation();
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const { language } = i18n;

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-inn">
            <div className="site-logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="header-navigation">
              <div className="mainmenu">
                <nav id="menu">
                  <ul className="dropdown">
                    <li>
                      <Link to="/">{t("home")}</Link>
                    </li>
                    {/* <li>
                      <Link to="/about">About</Link>
                    </li> */}
                    <li>
                      <Link to="/projects">{t("projects")}</Link>
                      {/* <ul>
                        <li>
                          <Link to="/projects">Project</Link>
                        </li>
                        <li>
                          <Link to="/projects-single">Project Details</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link to="/service">{t("services")}</Link>
                      {/* <ul>
                        <li>
                          <Link to="/service">Service</Link>
                        </li>
                        <li>
                          <Link to="/service-single">Service Details</Link>
                        </li>
                      </ul> */}
                    </li>

                    <li>
                      <Link to="/contact">{t("contact")}</Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <img
                          src={language === "ru" ? russia : armenia}
                          alt=""
                          style={{ height: "20px" }}
                        />
                        {/* {t("language")} */}
                      </Link>
                      <ul>
                        {/* <li>
                          <Link
                            to={location.pathname}
                            onClick={() => handleChangeLanguage("en-US")}
                          >
                            English
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            to={location.pathname}
                            onClick={() => handleChangeLanguage("hy")}
                          >
                            Հայերեն
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={location.pathname}
                            onClick={() => handleChangeLanguage("ru")}
                          >
                            Русский
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-action">
                <Link to="/contact" className="header-btn">
                  <div className="icon-holder">
                    <i className="far fa-envelope"></i>
                  </div>
                  {t("contact")}
                </Link>
              </div>

              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
