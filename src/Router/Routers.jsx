import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AllPages from "../Containers/AllPages";
import Shop from "../Pages/Shop/Shop";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Blog from "../Pages/Blog/Blog";
import Cart from "../Pages/Cart/Cart";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import ProductComparisonPage from "../Pages/ProductComparisonPage/ProductComparisonPage";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import OTPComponent from "../auth/OTPComponent";
import ForgetPassword from "../auth/ForgetPassword";
import Checkout from "../Pages/Checkout/Checkout";
import ResetPassword from "../auth/ResetPassword";


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
        path: "/comparison",
        element: <ProductComparisonPage />,
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
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/otp",
    element: <OTPComponent />,
  },

  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
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
