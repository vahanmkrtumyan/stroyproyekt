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
              <h className="section-title service-header">{t("service2")}</h>
              <div className="col-lg-6">
                <li className="list-style">{t("service2Text1")}</li>
                <li className="list-style">{t("service2Text2")}</li>
                <li className="list-style">{t("service2Text3")}</li>
                <li className="list-style">{t("service2Text4")}</li>
                <li className="list-style">{t("service2Text5")}</li>
                <li className="list-style">{t("service2Text6")}</li>
                <li className="list-style">{t("service2Text7")}</li>
                <p className="sub-title mt20 mb20">{t("service2subTitle1")}</p>
                <li className="list-style">{t("service2Text8")}</li>
                <li className="list-style">{t("service2Text9")}</li>
                <li className="list-style">{t("service2Text10")}</li>
                <li className="list-style">{t("service2Text11")}</li>
                <li className="list-style">{t("service2Text12")}</li>
              </div>
              <div className="col-lg-6">
                <p className="sub-title mt20 mb20">{t("service2subTitle2")}</p>

                <li className="list-style">{t("service2Text12")}</li>
                <li className="list-style">{t("service2Text14")}</li>
                <li className="list-style">{t("service2Text15")}</li>
                <li className="list-style">{t("service2Text16")}</li>
                <li className="list-style">{t("service2Text17")}</li>
                <li className="list-style">{t("service2Text18")}</li>
                <li className="list-style">{t("service2Text19")}</li>
                <li className="list-style">{t("service2Text20")}</li>
                <li className="list-style">{t("service2Text21")}</li>
                <li className="list-style">{t("service2Text22")}</li>
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
