export const addProduct=(id,arrayProduct,setProduct)=>{
  //se mira el array con find este devuelve un booleano, si hay en el array un producto con la misma id devuelve true
  const productExists= arrayProduct.find(product=> product.id===id)
  if(productExists){
    const updatedCart= arrayProduct.map(product=>
        product.id === id ? {...product , quantity: product.quantity + 1}: product
    );
    setProduct(updatedCart)
  }else{
    setProduct([...arrayProduct, {id, quantity:1}])
  }
}
