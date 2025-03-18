import { apiKey } from "../config";
import {useEffect, useState} from "react"
const options = {method: 'GET', headers: {Authorization: apiKey}};
export const ShoppingCard= () => {
    const [error, setError] = useState(null)
    const [sneakers, setSneakers]=useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage]=useState(1) 
        const fetchSneakers = async(page)=>{
            fetch(`https://api.sneakersapi.dev/api/v3/stockx/products?limit=20&page=${page}&product_type=sneakers`, options)
                .then(response => {
                    if (response.status >= 400) {
                        throw new Error("server error");
                    }
                    return response.json()
                })
                // Filtramos solo los que tengan product_type === "sneakers"
                .then(data => {
                    const filtredData=data.data.filter(item=>item.product_type==="sneakers")
                    setSneakers(filtredData)
                })
                .catch((error) => setError(error))
                .finally(()=> setLoading(false));
                
    }
    useEffect(()=>{ 
        fetchSneakers(page)  
        
    },[page])
    console.log(sneakers)

    if(error) return <p>The sneakers cant appear</p>
    if (loading) return <p>Loading...</p>
    return(
        <section style={{display:"flex", flexWrap:"wrap"}}>
            {
                sneakers.map((sneaker)=>(
                    <article key={sneaker.id}>
                        <img style={{width:"300px", height:"200px"}} src={sneaker.image} alt={"Image of" + sneaker.title} />
                    </article>
                ))
            }
        </section>
    )
}

