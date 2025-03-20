import { useEffect, useState } from "react"
import { options } from "../config"

export const ProductContainer = ({id})=>{
    const [sneaker, setSneaker]= useState(null);
    const[error, setError]= useState(null)
    const[loading, setLoading]= useState(true)
    
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
    if(error) return <p>The sneaker cant upload</p>
    if(loading) return <p>Loading...</p>
    return(
        <section>
            <figure ><img  style={{width:"300px",height:"200px" }}  src={sneaker.gallery_360[0]}alt="" srcset="" /></figure>
            <figure ><img style={{width:"300px",height:"200px" }}   src={sneaker.gallery_360[9]}alt="" srcset="" /></figure>
            <figure ><img  style={{width:"300px",height:"200px" }}  src={sneaker.gallery_360[19]}alt="" srcset="" /></figure>
            <figure ><img  style={{width:"300px",height:"200px" }}  src={sneaker.gallery_360[27]}alt="" srcset="" /></figure>
        </section>
    )
}