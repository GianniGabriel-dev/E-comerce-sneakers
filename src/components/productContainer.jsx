import { useEffect, useState } from "react"
import { options } from "../config"
import { Slider } from "./360_Slider";
import { useOutletContext } from "react-router-dom";

export const ProductContainer = ({id})=>{
    const [sneaker, setSneaker]= useState(null);
    const[error, setError]= useState(null)
    const[loading, setLoading]= useState(true)
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Obtiene la función `handleProductToCart` del contexto del Outlet para manejar la adición de productos al carrito.
    const { handleProductToCart } = useOutletContext(); 

    
    useEffect(()=>{
        //fetching of product by id of it
        const fetchProductById= async()=>{
            try{
                const response= await fetch(`https://api.sneakersapi.dev/api/v3/stockx/products/${id}`, options)
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                const data= await response.json();
                const filtredData = {
                    title: data.data.title,
                    gallery_360: data.data.gallery_360,
                    brand: data.data.brand,
                    image: data.data.image,
                    avg_price: data.data.avg_price,
                    short_description: data.data.short_description,
                  };
                    setSneaker(filtredData)
            }catch(error){
                setError(error)
            }finally{
                setLoading(false)
            }
        }
        if (id){
            fetchProductById();
        }
        
    },[id])
    useEffect(() => {
        if (sneaker) {
            console.log(sneaker);
        }
    }, [sneaker]);

//verificar si todas las iamgenes del array se han cargado    
    useEffect(()=>{
        const preloadImages = () => {
            //Si las imágenes de los sneakers no han caragado se sale de la función
            if (!sneaker || !sneaker.gallery_360) return;
            //Recorrer el array y cargar todas las imágenes mediante promesas
            const images = sneaker.gallery_360.map((src) => {
            const img = new Image();
            img.src = src;
            return new Promise((resolve) => {
                img.onload = resolve;
            });
            });
            
            // Esperar a que todas las imágenes se hayan cargado
            Promise.all(images)
            .then(() => setImagesLoaded(true))
            .catch((error) => console.error("Error loading images:", error));
        };
        preloadImages()

    },[sneaker])
        
        if (error) return <p>The sneaker can't be loaded</p>;
        if (loading || !imagesLoaded) return <p>Loading...</p>;
    return(
        <section className="productContainer">
            <Slider
                imageArray={sneaker.gallery_360}
                image={sneaker.image}
                productName={sneaker.title}
            />
            <section className="dataOfProduct">
                <article>
                    <p>{sneaker.title}</p>
                </article>
                <article>
                    <p>Buy now for:</p>
                    <p>{sneaker.avg_price.toFixed(2)}</p>
                    <div className="buttonContainer">
                        <button onClick={()=> handleProductToCart(sneaker.id , sneaker.image, sneaker.title, sneaker.avg_price)}>Add to cart</button>  {/**Me falta añadir un componente de elegir la cantidad de productos que quiero añadir a la cesta */}
                    </div>
                </article>
                {/*Si exsite una descripción, mostrarla, en caso de no ser así ocultarla */}
                {sneaker.short_description && (
                    <article>
                        <p>About this product</p>
                        <p style={{ textWrap: "wrap" }}>{sneaker.short_description}</p>
                    </article>
                )}
            </section>
        </section>
    )
}