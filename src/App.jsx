import { RouterProvider } from "react-router";
import Router from "./router";
import MainLayout from "./layouts/MainLayout";
const App = () => {
  document.title = "Its Me ";
  return (
    <MainLayout>
      <RouterProvider router={Router} />
    </MainLayout>
  );
};

export default App;
