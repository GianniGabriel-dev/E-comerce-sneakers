import { errorUrl, options } from "../config";
import {useEffect, useState} from "react"
import { useNavigate, useOutletContext } from "react-router-dom";
export const ShoppingCard= ({page}) => {
    const [error, setError] = useState(null)
    const [sneakers, setSneakers]=useState([])
    const [loading, setLoading] = useState(true)
    
    const navigate = useNavigate(); //se establece el useNavigate

    // Obtiene la función `handleProductToCart` del contexto del Outlet para manejar la adición de productos al carrito.
    const { handleProductToCart } = useOutletContext(); 



   //manejo del click que detecta a que producto haces click y te dirige a  la pagina donde aparece
    const handleLink=(id, name)=>{
        navigate(`/${name.split(" ").join("-")}/dp/${id}`);//navigate es igual que el link pero no hace falta usar un enlace de texto como tal, cada espacio del nombre es sustituido por un guion
        
    }

    useEffect(()=>{ 
        const fetchSneakers = async()=>{
            try {
                const response = await fetch(`https://api.sneakersapi.dev/api/v3/stockx/products?limit=30&page=${page}&product_type=sneakers`, options);
                
                if (response.status >= 400) {
                    throw new Error("server error");
                }
        
                const data = await response.json();
                console.log(data.data)
                // a los datos se le concatenan 2 metodos, el flitro guarda solo los sneakers y que no tengan una url con errorres, el siguente map, añade a filtedData solo los atributos que se usen
                const filtredData = data.data
                    .filter(item => item.product_type === "sneakers" && !item.image.includes(errorUrl))
                    .map(item => ({
                        id: item.id,
                        image: item.image,
                        title: item.title,
                        avg_price: item.avg_price
                    }));
        
                setSneakers(filtredData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            };
            
        }
        fetchSneakers()
    },[page])


    if(error) return <p>Upss.... The sneakers cant load</p>
    if (loading) return <p>Loading...</p>
    return(
            <section style={{display:"flex", flexWrap:"wrap"}}>
                {
                    sneakers.map((sneaker)=>(
                        <article key={sneaker.id} className="cardContainer"  >
                            <article className="productInfo" onClick={()=> handleLink(sneaker.id, sneaker.title)}>
                                <img style={{width:"300px", height:"200px"}} src={sneaker.image} alt={"Image of" + sneaker.title} />
                                <section>
                                    <p>{sneaker.title}</p>
                                    <p>{`${sneaker.avg_price.toFixed(2)} €`}</p> {/**toFixed quita todos los demas decimales mostrando en este caso solo 2 */}
                                </section>
                            </article>
                            <button onClick={()=>handleProductToCart(sneaker.id , sneaker.image, sneaker.title, sneaker.avg_price)}>Add to cart</button>
                        </article>
                    ))
                }
            </section>
    )
}

