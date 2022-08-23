import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ProjectList from "../../components/ProjectList";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";

const ProjectPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={t("projects")} pagesub={t("projects")} />
      <ProjectList />
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
