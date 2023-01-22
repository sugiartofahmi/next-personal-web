import { Fragment } from "react";
import BaseLayout from "../../layouts/BaseLayout";
import ContentLayout from "../../layouts/ContentLayout";
const HomeModules = () => {
  return (
    <Fragment>
      <BaseLayout md="w-1/4">
        <ContentLayout>
          <h1>Halo</h1>
        </ContentLayout>
        <ContentLayout>
          <h1>Halo</h1>
        </ContentLayout>
      </BaseLayout>
      <BaseLayout md="w-3/4">
        <ContentLayout>
          <h1>Halo</h1>
        </ContentLayout>
        <ContentLayout>
          <h1>Halo</h1>
        </ContentLayout>
        <ContentLayout>
          <h1>Halo</h1>
        </ContentLayout>
        <ContentLayout>
          <h1>Halo</h1>
        </ContentLayout>
      </BaseLayout>
    </Fragment>
  );
};
export default HomeModules;
