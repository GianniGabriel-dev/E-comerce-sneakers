import { Link } from "react-router-dom";
export const ShopPage = () => {
    //me falta añadir un useParams producto, osea un "const {porduct}=useParams()" pruduct seria el producto de la api al quele des click y actaulizaria el nombre de la url
    return(
     <>
        <p>this is the shop page</p>
        <Link to="/">Click here to go back</Link>
     </>
    )   
  }; 