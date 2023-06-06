import { RouterProvider } from "react-router";
import Router from "./router";
import MainLayout from "./layouts/MainLayout";
import { RecoilRoot } from "recoil";
const App = () => {
  document.title = "Its Me ";
  return (
    <MainLayout>
      <RecoilRoot>
        <RouterProvider router={Router} />
      </RecoilRoot>
    </MainLayout>
  );
};

export default App;
