import { Link, Outlet } from "react-router-dom";
import { ShoppingCard } from "../components/shoppingCard";


export const ShopPage = () => {
    //me falta añadir un useParams producto, osea un "const {porduct}=useParams()" pruduct seria el producto de la api al quele des click y actaulizaria el nombre de la url
    return(
     <>
        <p>this is the shop page</p>
        <ShoppingCard/>
        <Link to="/">Click here to go back</Link>
     </>
    )   
  }; 