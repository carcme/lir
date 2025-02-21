import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Sports from "./Sports";
import Contact from "./Contact";
import Error from "./Error";
const Temp = React.lazy(() => import("./Temp"));
// import Temp from "";
//const Menu = React.lazy(() => import("./Menu"));
import Menu from "./Menu";
import SinglePost from "./SinglePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/menu/:slug",
        element: <SinglePost />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/temp",
        element: <Temp />,
      },
      {
        path: "/sports",
        element: <Sports />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
export default router;
