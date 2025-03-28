export const addProduct = (id, img, title, price, arrayProduct, setProduct) => {
  //Se mira el array con find este devuelve un booleano, si hay en el array un producto con la misma id devuelve true
  const productExists = arrayProduct.find((product) => product.id === id);
  if (productExists) {
    //Se mapea el array y caundo se encuentre la misma id de un producto suma 1 a la cantidad del mismo
    const updatedCart = arrayProduct.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProduct(updatedCart);
    //Si el producto no está repetido añade al array la id y la cantidad inicial de 1
  } else {
    setProduct([...arrayProduct, { id, quantity: 1, img, title, price }]);
  }
};
