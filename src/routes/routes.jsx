import { HomePage } from "../pages/homePage";
import { ShoppingCartPage } from "../pages/shoppingCartPage";
import { ShopPage } from "../pages/shoppingPage";
import { ErrorPage } from "../pages/errorPage";
import App from "../App";
import { ProductPage } from "../pages/productPage";





const routes = [
  {
    path: "/",
    element: <App />, // App.jsx actúa como layout
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // El índice true establece la homepage como página principal
      {
        path: "shop/:brand?",  //el interrogante hace que sea un elemento opcional de la url, ya que puedes buscar por marcas o en general
        element: <ShopPage />, 
      },
      {
        path: "/:productName/dp/:productId", //pagina que aparece al hacer click en un producto, a la url se le pasa su nombre e id, dp en la url significa detail page
        element: <ProductPage />, 
      },
      { path: "cart", element: <ShoppingCartPage /> },
    ],
  },
];

export default routes;