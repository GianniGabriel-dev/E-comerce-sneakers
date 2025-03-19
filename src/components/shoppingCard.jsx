import { apiKey, errorUrl } from "../config";
import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
const options = {method: 'GET', headers: {Authorization: apiKey}};
export const ShoppingCard= () => {
    const [error, setError] = useState(null)
    const [sneakers, setSneakers]=useState([])
    const [loading, setLoading] = useState(true)
    const[productId, setProductId]= useState("")
    const [productName, setProductName]=useState("")
    const [page, setPage]=useState(1) 

    const navigate = useNavigate();
        const handleClick=(id, name)=>{
            navigate(  name.split(" ").join("-")+ "/dp/" +id);
            
        }
        const fetchSneakers = async(page)=>{
            fetch(`https://api.sneakersapi.dev/api/v3/stockx/products?limit=30&page=${page}&product_type=sneakers`, options)
                .then(response => {
                    if (response.status >= 400) {
                        throw new Error("server error");
                    }
                    return response.json()
                })
                // Filtramos solo los que tengan product_type === "sneakers" y tambien filtramos solo los datos que necesitemos para optimizar mas el codigo
                .then(data => {
                    const filtredData=data.data
                        .filter(item=>item.product_type==="sneakers" && !item.image.includes(errorUrl))
                        .map(item => ({
                            id: item.id,
                            image: item.image,
                            title: item.title,
                            avg_price: item.avg_price
                        }));

                    setSneakers(filtredData)
                })
                .catch((error) => setError(error))
                .finally(()=> setLoading(false));
                
    }
    useEffect(()=>{ 
        fetchSneakers(page)  
        
    },[page])


    if(error) return <p>The sneakers cant appear</p>
    if (loading) return <p>Loading...</p>
    return(
        <section style={{display:"flex", flexWrap:"wrap"}}>
            {
                sneakers.map((sneaker)=>(
                    <article key={sneaker.id} onClick={()=> handleClick(sneaker.id, sneaker.title)} >
                        <img style={{width:"300px", height:"200px"}} src={sneaker.image} alt={"Image of" + sneaker.title} />
                        <section>
                            <p>{sneaker.title}</p>
                            <p>{`${sneaker.avg_price.toFixed(2)} €`}</p> {/**toFixed quita todos los demas decimales mostrando en este caso solo 2 */}
                        </section>
                    </article>
                ))
            }
        </section>
    )
}

