import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";

const ServiceSinglePage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={t("service-details")} pagesub={t("")} />
      <div>
        <section className="service-video-box-area" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center">
              <h className="section-title service-header">{t("service5")}</h>
              <div className="col-lg-6">
                <li className="list-style">{t("service5Text1")}</li>
                <li className="list-style">{t("service5Text2")}</li>
              </div>
              <div className="col-lg-6">
                <li className="list-style">{t("service5Text3")}</li>
                <li className="list-style">{t("service5Text4")}</li>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <ServiceSingle /> */}
      <Footer />
    </Fragment>
  );
};
export default ServiceSinglePage;
