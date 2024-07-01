import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AllPages from "../Containers/AllPages";
import Shop from "../Pages/Shop/Shop";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AllPages />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Shop />,
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
