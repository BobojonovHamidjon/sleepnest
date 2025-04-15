import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Collection from "../pages/Collection";
import Contact from "../pages/Contact";
import Wishlist from "../pages/Wishlist";
import Product from "../pages/Product";
 // Yangilikning to'liq sahifasi komponenti
import News from "../components/News";
import NewsDetail from "../pages/NewsDetal";

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
        path: ":id", // Mahsulot sahifasi uchun aniq prefiks
        element: <Product />,
      },
      {
        path: "news", // Yangiliklar sahifasi uchun aniq prefiks
        element: <News />,
      },
      {
        path: "news/:id", // Yangilikning to'liq sahifasi uchun aniq marshrut
        element: <NewsDetail />,
      },
    ],
  },
]);