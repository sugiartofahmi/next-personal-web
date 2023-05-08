import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Projects from "../views/Projects";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
]);

export default Router;
