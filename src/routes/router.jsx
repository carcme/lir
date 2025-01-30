import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Sports from "./Sports";
import Contact from "./Contact";
import Error from "./Error";

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
