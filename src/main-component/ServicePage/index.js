import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ServiceList from "../../components/ServiceList";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";

const ServicePage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={t("services")} pagesub={t("services")} />
      <ServiceList />
      <Footer />
    </Fragment>
  );
};
export default ServicePage;
