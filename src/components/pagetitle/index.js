import React from "react";
import { Link } from "react-router-dom";
import bg from "../../img/300.jpg";

import "./style.css";

const PageTitle = (props) => {
  return (
    <section
      className="breadcrumb-area"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inn">
              <h1>{props.pageTitle}</h1>
              <ul>
                {/* <li className="home">
                  <Link to="/">
                    <span className="fas fa-home" />
                  </Link>
                </li> */}
                <li>{props.pagesub}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
