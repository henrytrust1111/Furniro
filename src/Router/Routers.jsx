import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AllPages from "../Containers/AllPages";
import Shop from "../Pages/Shop/Shop";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import ProductComparisonPage from "../Pages/ProductComparisonPage/ProductComparisonPage";
import Blog from "../Pages/Blog/Blog";
import Cart from "../Pages/Cart/Cart";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const route = createHashRouter([
  {
    path: "/",
    element: <AllPages />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/single-product",
        element: <SingleProduct />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function Routers() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default Routers;
