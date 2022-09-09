import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ServiceSingle from "../../components/ServiceSingle";
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
              <h className="section-title service-header">{t("service1")}</h>
              <div className="col-lg-6">
                <li className="list-style">{t("service1Text1")}</li>
                <li className="list-style">{t("service1Text2")}</li>
                <li className="list-style">{t("service1Text3")}</li>
                <li className="list-style">{t("service1Text4")}</li>
                <li className="list-style">{t("service1Text5")}</li>
              </div>
              <div className="col-lg-6">
                <li className="list-style">{t("service1Text6")}</li>
                <li className="list-style">{t("service1Text7")}</li>
                <li className="list-style">{t("service1Text8")}</li>
                <li className="list-style">{t("service1Text9")}</li>
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
