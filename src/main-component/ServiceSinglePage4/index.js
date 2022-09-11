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
              <h className="section-title service-header">{t("service4")}</h>
              <div className="col-lg-6">
                <p className="sub-title mt20 mb20">{t("service4subTitle1")}</p>

                <li className="list-style">{t("service4Text1")}</li>
                <p className="sub-title mt20 mb20">{t("service4subTitle2")}</p>

                <li className="list-style">{t("service4Text2")}</li>
                <li className="list-style">{t("service4Text3")}</li>
                <li className="list-style">{t("service4Text4")}</li>
                <li className="list-style">{t("service4Text5")}</li>
              </div>
              <div className="col-lg-6">
                <p className="sub-title mt20 mb20">{t("service4subTitle3")}</p>
                <li className="list-style">{t("service4Text6")}</li>
                <li className="list-style">{t("service4Text7")}</li>
                <p className="sub-title mt20 mb20">{t("service4subTitle4")}</p>
                <li className="list-style">{t("service4Text8")}</li>
                <li className="list-style">{t("service4Text9")}</li>
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
