import { Fragment } from "react";
import BaseLayout from "../../layouts/BaseLayout";
import ContentLayout from "../../layouts/ContentLayout";
import Header from "./Header";
import Skills from "./Skills";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Certification from "./Certification";
const HomeModules = () => {
  return (
    <Fragment>
      <BaseLayout md="w-1/4">
        <ContentLayout>
          <Header />
        </ContentLayout>
        <ContentLayout>
          <Skills />
        </ContentLayout>
        <ContentLayout>
          <Education />
        </ContentLayout>
      </BaseLayout>
      <BaseLayout md="w-3/4">
        <ContentLayout>
          <About />
        </ContentLayout>
        <ContentLayout>
          <Experiences />
        </ContentLayout>
        <ContentLayout>
          <Projects />
        </ContentLayout>
        <ContentLayout>
          <Certification />
        </ContentLayout>
      </BaseLayout>
    </Fragment>
  );
};
export default HomeModules;
