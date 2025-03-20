import { useEffect, useState } from "react"
import { options } from "../config"
import { Slider } from "./360_Slider";

export const ProductContainer = ({id})=>{
    const [sneaker, setSneaker]= useState(null);
    const[error, setError]= useState(null)
    const[loading, setLoading]= useState(true)
    const [imagesLoaded, setImagesLoaded] = useState(false);
    
    useEffect(()=>{
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

    const preloadImages = () => {
        if (!sneaker || !sneaker.gallery_360) return;
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
    
      if (error) return <p>The sneaker can't be loaded</p>;
      if (loading || !imagesLoaded) return <p>Loading...</p>;
    return(
        <Slider
            imageArray={sneaker.gallery_360}
            productName={sneaker.title}
        />
    )
}