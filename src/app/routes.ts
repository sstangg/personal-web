import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Experience from "./components/pages/Experience";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: About },
      { path: "projects", Component: Projects },
      { path: "experience", Component: Experience },
    ],
  },
]);
