import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import projectImg1 from "../../img/project-4.jpg";
import projectImg2 from "../../img/project-5.jpg";
import projectImg3 from "../../img/project-6.jpeg";
import projectImg4 from "../../img/project-7.jpg";

import rio_t1 from "../../img/rio-tambov/rio_t1.jpg";
import rio_t2 from "../../img/rio-tambov/rio_t2.jpg";
import rio_t3 from "../../img/rio-tambov/rio_t3.jpg";
import rio_t4 from "../../img/rio-tambov/rio_t4.jpg";

import lerua1 from "../../img/lerua/lerua1.jpg";
import lerua2 from "../../img/lerua/lerua2.jpg";
import lerua3 from "../../img/lerua/lerua3.jpg";
import lerua4 from "../../img/lerua/lerua4.jpg";
import lerua5 from "../../img/lerua/lerua5.jpg";

import raspred1 from "../../img/raspred/raspred1.jpg";
import raspred2 from "../../img/raspred/raspred2.jpg";
import raspred3 from "../../img/raspred/raspred3.jpg";
import raspred4 from "../../img/raspred/raspred4.jpg";

import rio_k1 from "../../img/rio-kostroma/rio_k1.webp";
import rio_k2 from "../../img/rio-kostroma/rio_k2.webp";
import rio_k3 from "../../img/rio-kostroma/rio_k3.webp";
import rio_k4 from "../../img/rio-kostroma/rio_k4.jpg";
import rio_k5 from "../../img/rio-kostroma/rio_k5.jpg";
import rio_k6 from "../../img/rio-kostroma/rio_k6.jpg";
import rio_k8 from "../../img/rio-kostroma/rio_k8.jpg";

import "./style.css";

const ProjectList = () => {
  const { t } = useTranslation();

  const images = [
    [projectImg1, rio_t1, rio_t2, rio_t3, rio_t4],
    [projectImg2, lerua1, lerua2, lerua3, lerua4, lerua5],
    [projectImg3, raspred1, raspred2, raspred3, raspred4],
    [rio_k1, rio_k2, rio_k3, rio_k4, rio_k5, rio_k6, rio_k8],
  ];

  const [state, setState] = useState({
    selectedProject: 0,
    photoIndex: 0,
    isOpen: false,
  });

  const { isOpen, photoIndex, selectedProject } = state;

  return (
    <section className="projects-area projects-page-area">
      <div className="container">
        {isOpen && (
          <Lightbox
            mainSrc={images[selectedProject][photoIndex]}
            nextSrc={
              images[selectedProject][
                (photoIndex + 1) % images[selectedProject].length
              ]
            }
            prevSrc={
              images[selectedProject][
                (photoIndex + images[selectedProject].length - 1) %
                  images[selectedProject].length
              ]
            }
            onCloseRequest={() => setState({ ...state, isOpen: false })}
            onMovePrevRequest={() =>
              setState({
                ...state,
                photoIndex:
                  (photoIndex + images[selectedProject].length - 1) %
                  images[selectedProject].length,
              })
            }
            onMoveNextRequest={() =>
              setState({
                ...state,
                photoIndex: (photoIndex + 1) % images[selectedProject].length,
              })
            }
          />
        )}
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h2 className="section-title">{t("projects")}</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-between">
              <div
                className="col-md-5  col-sm-6 cursor"
                onClick={() =>
                  setState({ ...state, isOpen: true, selectedProject: 0 })
                }
              >
                <div className="project-box">
                  <img src={projectImg1} alt="img" />
                  <h3>{t("project1Title")}</h3>
                  <p>{t("project1Place")}</p>
                </div>
              </div>
              <div
                className="col-md-5 col-sm-6 cursor"
                onClick={() =>
                  setState({ ...state, isOpen: true, selectedProject: 1 })
                }
              >
                <div className="project-box">
                  <img src={projectImg2} alt="img" />
                  <h3>{t("project2Title")}</h3>
                  <p>{t("project2Place")}</p>
                </div>
              </div>
              <div
                className="col-md-5 col-sm-6 cursor"
                onClick={() =>
                  setState({ ...state, isOpen: true, selectedProject: 2 })
                }
              >
                <div className="project-box">
                  <img src={projectImg3} alt="img" />
                  <h3>{t("project3Title")}</h3>
                  <p>{t("project3Place")}</p>
                </div>
              </div>
              <div
                className="col-md-5 col-sm-6 cursor"
                onClick={() =>
                  setState({ ...state, isOpen: true, selectedProject: 3 })
                }
              >
                <div className="project-box">
                  <img src={projectImg4} alt="img" />
                  <h3>{t("project4Title")}</h3>
                  <p>{t("project4Place")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectList;
