import { Link, Outlet } from "react-router-dom";
import { ShoppingCard } from "../components/shoppingCard";
import { useState } from "react";

export const ShopPage = () => {
   const [page, setPage]=useState(1) 
    return(
     <>
        <p>this is the shop page</p>
        <ShoppingCard page={page} setPage={setPage}/>
        <section className="pageControl">
            <article onClick={()=> page>1? setPage(page -1): page}>Prev</article>
            <article onClick={()=> setPage(page +1)}>Next</article>
        </section>
        <Link to="/">Click here to go back</Link>
     </>
    )   
  }; 