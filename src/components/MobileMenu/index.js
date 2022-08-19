import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import "./style.css";

export const MobileMenu = () => {
  const [state, setState] = useState({
    isMenuShow: false,
    isOpen: 0,
  });

  const { t, i18n } = useTranslation();

  let location = useLocation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const menus = [
    {
      id: 1,
      title: t("home"),
      link: "/home",
    },

    {
      id: 2,
      title: t("about"),
      link: "/about",
    },

    {
      id: 3,
      title: t("projects"),
      link: "/projects",
    },
    {
      id: 4,
      title: t("services"),
      link: "/service",
    },
    {
      id: 88,
      title: t("contact"),
      link: "/contact",
    },
    {
      id: 89,
      title: t("language"),
      link: "/",
      submenu: [
        {
          id: 51,
          title: "English",
          link: location.pathname,
          onClick: () => handleChangeLanguage("en-US"),
        },
        {
          id: 52,
          title: "Հայերեն",
          link: location.pathname,
          onClick: () => handleChangeLanguage("hy"),
        },
        {
          id: 53,
          title: "Русский",
          link: location.pathname,
          onClick: () => handleChangeLanguage("ru"),
        },
      ],
    },
  ];

  const menuHandler = () => {
    setState({
      ...state,
      isMenuShow: !state.isMenuShow,
    });
  };

  const setIsOpen = (id) => () => {
    setState({
      ...state,
      isOpen: id === state.isOpen ? 0 : id,
    });
  };

  const { isMenuShow, isOpen } = state;
  return (
    <div className="responsiveMenu">
      <nav
        id="mobileMenu"
        className={`mobileMenu ${isMenuShow ? "active" : ""}`}
      >
        <ul className="responsivemenu">
          {menus.map((item) => {
            return (
              <li key={item.id}>
                {item.submenu ? (
                  <p onClick={setIsOpen(item.id)} aria-expanded={isMenuShow}>
                    {item.title}
                    {item.submenu ? "" : ""}
                  </p>
                ) : (
                  <Link to={item.link}>{item.title}</Link>
                )}

                {item.submenu ? (
                  <Collapse in={item.id === isOpen}>
                    <ul className="sub-menu">
                      {item.submenu.map((submenu) => (
                        <li key={submenu.id}>
                          <Link
                            className="active"
                            to={submenu.link}
                            onClick={submenu.onClick || null}
                          >
                            {submenu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Collapse>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        className={`spinner-master ${isMenuShow ? "active" : ""}`}
        onClick={menuHandler}
      >
        <div id="spinner-form" className="spinner-spin">
          <div className="spinner diagonal part-1"></div>
          <div className="spinner horizontal"></div>
          <div className="spinner diagonal part-2"></div>
        </div>
      </div>
    </div>
  );
};
