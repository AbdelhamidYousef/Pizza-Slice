import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./ui/routes/root/Root";
import Home from "./ui/routes/home/Home";
import Menu from "./ui/routes/menu/Menu";
import Cart from "./ui/routes/cart/Cart";
import NewOrder from "./ui/routes/order/NewOrder";
import Order from "./ui/routes/order/Order";
import Error from "./ui/shared/Error";
import { menuLoader, orderLoader } from "./data/loaders";
import { newOrderAction } from "./data/actions/newOrder";
import { orderAction } from "./data/actions/order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order/new",
        element: <NewOrder />,
        errorElement: <Error />,
        action: newOrderAction,
      },
      {
        path: "order/:id",
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
        action: orderAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
