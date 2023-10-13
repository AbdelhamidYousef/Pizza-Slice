import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./ui/routes/root/Root";
import Home from "./ui/routes/home/Home";
import Menu from "./ui/routes/menu/Menu";
import Cart from "./ui/routes/cart/Cart";
import NewOrder from "./ui/routes/order/NewOrder";
import Order from "./ui/routes/order/Order";
import ErrorPage from "./ui/shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order/new",
        element: <NewOrder />,
      },
      {
        path: "order/:id",
        element: <Order />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
