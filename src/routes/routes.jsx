import { HomePage } from "/src/pages/homePage.jsx";
import { ShoppingCartPage } from "/src/pages/shoppingCartPage.jsx";
import { ShopPage } from "/src/pages/shoppingPage.jsx";
import { ErrorPage } from "/src/pages/errorPage.jsx";
import App from "/src/App.jsx";
import { ProductPage } from "/src/pages/productPage.jsx";
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