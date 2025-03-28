import { AddAndDeleteButtons } from "../components/addAndDeleteButtons";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "../styles/ShoppingCartPage.css"
import "../styles/popUp.css"
import { useEffect, useState } from "react";

export const ShoppingCartPage = () => {
  const { cart, setCart, totalPrice} = useOutletContext();
  const navigate = useNavigate();
  const [headerHeight, setHeaderHeight] = useState(0);
  const[popUp, setPopUp]=useState(false)


  //calcula cada vez la altura del header para aplicar luego un estilo sticky y que no se sobreponga con el header
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  //link de la imagen del producto que lleva a su propia pagina
  const handleLink=(id, name)=>{
      navigate(`/${name.split(" ").join("-")}/dp/${id}`);
   }
   //funcion que se ejecuta al pulsar el boton de checkout
   const handleCheckout = () => {
      setPopUp(true);
      setTimeout(()=>{
        setPopUp(false)
        setCart([]);
      }, 4000)
      
  }

  return (
      <section className="cartContainer">
        { cart.length === 0 ? (
          <article className="emptyCart">
            <p >Your cart is empty</p>
            <Link to="/shop">Go to the shop</Link>
          </article>
        ): (
          <>
            <section className="productCartContainer">
              {cart.map((product) => (
                <article key={product.id}>
                  <article className="productCartInfo">
                    <figure>
                      <img 
                        src={product.img}
                        alt={`Image of sneakers: ${product.title}`}
                        onClick={()=> handleLink(product.id, product.title)}
                      />
                    </figure>
                    <div className="titleAndPrice">
                    <p>{product.title.charAt(0).toUpperCase() + product.title.slice(1)}</p>
                    <div className="price">
                        <p>{(product.price * product.quantity).toFixed(2)+" €"}</p> {/*precio multiplicado por la cantidad del producto */}
                        <p>{`Price per unit: ${product.price.toFixed(2)} €`}</p>  {/*precio de una sola unidad*/}
                    </div>
                    </div>
                  </article>
                  <AddAndDeleteButtons 
                    product={product}
                    cart={cart}
                    setCart={setCart}
                  />
                </article>
              ))}
            </section>
            <section className="paymentContainer" style={{ top: `${headerHeight + 30}px`, position: "sticky" }}>
              <article className="priceContainer">
                <p>Summary</p>
                <p>Est. Total: {totalPrice.toFixed(2)} €</p>
              </article>
              <button onClick={handleCheckout}>Proceed to checkout</button>
            </section>
            {popUp && (
              <div className="popup">
                <p>Thank you for your purchase!</p>
              </div>
            )}
          </>
        )}
      </section>
  );
};
