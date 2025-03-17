import { HomePage } from "../pages/homePage";
import { ShoppingCartPage } from "../pages/shoppingCartPage";
import { ShopPage } from "../pages/shoppingPage";
import { ErrorPage } from "../pages/errorPage";
import App from "../App";



const routes = [
  {
    path: "/",
    element: <App />, // App.jsx actua como layout
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> }, // el index true establece la homepage como pagin principal
      { path: "shopPage", element: <ShopPage /> },
      { path: "cart", element: <ShoppingCartPage /> },
    ],
  },
];

export default routes;