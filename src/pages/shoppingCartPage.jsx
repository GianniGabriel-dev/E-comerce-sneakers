import { Link, useOutletContext } from "react-router-dom";
export const ShoppingCartPage = () => {
   const { cart } = useOutletContext(); 
  for(let i=0; i <  cart.length; i++){
   console.log(cart[i])
  }
   
    return(
     <>
        <p>this is the shopping cart page</p>
        
        <Link to="/">Click here to go back</Link>
     </>
    )   
  }; 