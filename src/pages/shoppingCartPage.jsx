import { AddAndDeleteButtons } from "../components/addAndDeleteButtons";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
export const ShoppingCartPage = () => {
  const { cart, setCart, totalPrice} = useOutletContext();


  const navigate = useNavigate();
  
  const handleLink=(id, name)=>{
      navigate(`/${name.split(" ").join("-")}/dp/${id}`);
   }

  return (
    <section className="cartContainer">
      <section className="productCartContainer">
        {cart.map((product) => (
          <article key={product.id}>
            <article className="productInfo">
              <figure>
                <img 
                  className="productPhoto"
                  src={product.img}
                  alt={`Image of sneakers: ${product.title}`}
                  style={{width:"150px", height:"75px"}}
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
      <section className="paymentContainer">
        <article className="priceContainer">
          <p>Summmary</p>
          <p>Est. Total: {totalPrice} </p>
        </article>
        <button>Proceed to checkout</button>
      </section>
    </section>
  );
};
