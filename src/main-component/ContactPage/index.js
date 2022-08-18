import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Contactpage from "../../components/Contactpage";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={t("contact")} pagesub={t("contact")} />
      <Contactpage />
      <Footer />
    </Fragment>
  );
};
export default ContactPage;
