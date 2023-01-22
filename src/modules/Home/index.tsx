import { Fragment } from "react";
import BaseLayout from "../../layouts/BaseLayout";
import ContentLayout from "../../layouts/ContentLayout";
import Header from "./Header";
import Skills from "./Skills";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
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
      </BaseLayout>
      <BaseLayout md="w-3/4">
        <ContentLayout>
          <About />
        </ContentLayout>
        <ContentLayout>
          <Education />
        </ContentLayout>
        <ContentLayout>
          <Projects />
        </ContentLayout>
      </BaseLayout>
    </Fragment>
  );
};
export default HomeModules;
