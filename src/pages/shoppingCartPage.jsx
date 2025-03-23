import { Link, useNavigate, useOutletContext } from "react-router-dom";
export const ShoppingCartPage = () => {
  const { cart, setCart } = useOutletContext();

  const navigate = useNavigate();
  
  const handleLink=(id, name)=>{
      navigate(`/${name.split(" ").join("-")}/dp/${id}`);
   }
   
   const deleteProduct=(productToRemove)=>{
      setCart(cart.filter((product)=> product.id !== productToRemove.id)
   )}

  return (
    <>
      <p>Mi cesta</p>
      <section className="cartContainer">
        {cart.map((product) => (
          <article key={product.id}>
            <article className="productInfo">
              <figure>
                <img
                  src={product.img}
                  alt={`Image of sneakers: ${product.title}`}
                  style={{width:"150px", height:"75px"}}
                  onClick={()=> handleLink(product.id, product.title)}
                />
              </figure>
              <div className="titleAndPrice">
               <p>{product.title}</p>
               <div className="price">
                  <p>{(product.price * product.quantity).toFixed(2)}</p>
                  <p>Price per unit {product.price.toFixed(2)}</p>
               </div>
              </div>
            </article>
            <article className="addAndDeleteButtons">
               <button onClick={()=> deleteProduct(product)}>Delete</button>
            </article>
          </article>
        ))}
      </section>
      <Link to="/">Click here to go back</Link>
    </>
  );
};
