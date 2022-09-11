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
              <h className="section-title service-header">{t("service3")}</h>
              <div className="col-lg-6">
                <li className="list-style">{t("service3Text1")}</li>
                <li className="list-style">{t("service3Text2")}</li>
                <li className="list-style">{t("service3Text3")}</li>
                <li className="list-style">{t("service3Text4")}</li>
                <li className="list-style">{t("service3Text5")}</li>
                <li className="list-style">{t("service3Text6")}</li>
                <li className="list-style">{t("service3Text7")}</li>
              </div>
              <div className="col-lg-6">
                <li className="list-style">{t("service3Text8")}</li>
                <li className="list-style">{t("service3Text9")}</li>
                <li className="list-style">{t("service3Text10")}</li>
                <li className="list-style">{t("service3Text11")}</li>
                <li className="list-style">{t("service3Text12")}</li>
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
