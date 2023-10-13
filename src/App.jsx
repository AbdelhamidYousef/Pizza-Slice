import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./ui/routes/root/Root";
import Home from "./ui/routes/home/Home";
import Menu from "./ui/routes/menu/Menu";
import Cart from "./ui/routes/cart/Cart";
import NewOrder from "./ui/routes/order/NewOrder";
import Order from "./ui/routes/order/Order";
import ErrorScreen from "./ui/shared/ErrorScreen";
import { menuLoader } from "./data/loaders/menuLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorScreen />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: menuLoader,
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
