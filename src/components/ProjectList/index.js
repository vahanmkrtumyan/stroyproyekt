import React from "react";
// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import projectImg1 from "../../img/project-4.jpg";
import projectImg2 from "../../img/project-5.jpg";
import projectImg3 from "../../img/project-6.jpeg";
import projectImg4 from "../../img/project-7.jpg";
// import projectImg10 from "../../img/project-13.jpg";

import "./style.css";

const ProjectList = () => {
  const { t } = useTranslation();

  return (
    <section className="projects-area projects-page-area">
      <div className="container">
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
              <div className="col-md-5  col-sm-6">
                <div className="project-box">
                  {/* <Link to="/projects-single"> */}
                  <img src={projectImg1} alt="img" />
                  <h3>{t("project1Title")}</h3>
                  <p>{t("project1Place")}</p>
                  {/* <div className="project-zoom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye"
                    >
                      <path
                        stroke="#ffffff"
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      />
                      <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                    </svg>
                  </div> */}
                  {/* </Link> */}
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  {/* <Link to="/projects-single"> */}
                  <img src={projectImg2} alt="img" />
                  <h3>{t("project2Title")}</h3>
                  <p>{t("project2Place")}</p>
                  {/* <div className="project-zoom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye"
                    >
                      <path
                        stroke="#ffffff"
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      />
                      <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                    </svg>
                  </div> */}
                  {/* </Link> */}
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  {/* <Link to="/projects-single"> */}
                  <img src={projectImg3} alt="img" />
                  <h3>{t("project3Title")}</h3>
                  <p>{t("project3Place")}</p>
                  {/* <p>INTERIOR</p> */}
                  {/* <div className="project-zoom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye"
                    >
                      <path
                        stroke="#ffffff"
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      />
                      <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                    </svg>
                  </div> */}
                  {/* </Link> */}
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="project-box">
                  {/* <Link to="/projects-single"> */}
                  <img src={projectImg4} alt="img" />
                  <h3>{t("project4Title")}</h3>
                  <p>{t("project4Place")}</p>
                  {/* <div className="project-zoom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye"
                    >
                      <path
                        stroke="#ffffff"
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      />
                      <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                    </svg>
                  </div> */}
                  {/* </Link> */}
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
