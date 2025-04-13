import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../pages/Home";
import About from "../pages/About";
import Collection from "../pages/Collection";
import Contact from "../pages/Contact";
import Wishlist from "../pages/Wishlist";
import Product from "../pages/Product";
import Perfect from "../pages/perfect/Perfect";
import Perfect3 from "../pages/perfect/Perfect3";
import Perfect2 from "../pages/perfect/Perfect2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "collection",
        element: <Collection />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: ":id",
        element: <Product />,
      }
     

    ],
  },
]);
