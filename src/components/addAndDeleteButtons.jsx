import { icons } from "../assets/icons";
export const AddAndDeleteButtons=({ product, cart, setCart})=>{ 


   const deleteProduct=(productToRemove)=>{
    // filter devuelve filtrados todos los productos que tengan id diferente al producto que se quiere eliminar
    setCart(cart.filter((product)=> product.id !== productToRemove.id)
 )}

    const restQuantity = (product) => {
        //condicion que prohibe tener una cantidad 0 de  un producto
        if (product.quantity > 1) {
          setCart(
            //se recorre el array cart y donde esté el producto con el mismo id se le realiza la operacion
            cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity - 1 }
                : item //Deja el producto sin cambios si no coincide el id
            )
          );
        }
      };
    
      const sumQuantity = (product) => {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      };
    return(
    <article className="addAndDeleteButtons">
        <button className="deleteButton" onClick={()=> deleteProduct(product)}>{icons[3].trash}</button>
        <section className="controlQuantity">
           <div onClick={()=> restQuantity(product)}>-</div>
           <div className="productQuantity">{product.quantity}</div>
           <div onClick={()=> sumQuantity(product)}>+</div>
        </section>
     </article>
    )
}