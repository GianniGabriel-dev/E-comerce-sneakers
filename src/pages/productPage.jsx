import { useParams } from "react-router-dom";
import { ProductContainer } from "../components/productContainer";

export const ProductPage = () => {
 // en el archivo routes, aparece en la url :productName y :productId, useParams() accede a la url y recoge dichos valores para luego usarlos en el fetch o para mostrar datos
  const { productName, productId } = useParams();

  return (
    <>
      <ProductContainer id={productId}/>
      <p>This is the Product Page</p>
      <p>Product Name: {productName.replace("-", " ")}</p>
      <p>Product ID: {productId}</p>
    </>
  );
};