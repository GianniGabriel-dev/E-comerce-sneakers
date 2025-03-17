import { HomePage } from "../pages/homePage";
import { ShoppingCartPage } from "../pages/shoppingCartPage";
import { ShopPage } from "../pages/shoppingPage";
import App from "../App";



const routes = [
  {
    path: "/",
    element: <App />, // App.jsx actua como layout
    children: [
      { index: true, element: <HomePage /> }, // Página principal
      { path: "shopPage", element: <ShopPage /> },
      { path: "cart", element: <ShoppingCartPage /> },
    ],
  },
];

export default routes;