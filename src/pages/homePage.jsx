import { useNavigate, useOutletContext } from "react-router-dom";

export const HomePage = () => {
   const navigate = useNavigate();
   const handleLink =()=>{
      navigate("/shop")
   }
   const {setBrand} = useOutletContext(); 

   const handleSneaker=(brand)=>{
      setBrand(brand)
      navigate(`/shop/${brand}`)
   }
   const logos = [
      { url: "src/assets/logos/jordan.webp", brand: "Jordan" },
      { url: "src/assets/logos/adidas.webp", brand: "adidas" },
      { url: "src/assets/logos/new-balance.webp", brand: "New Balance" },
      { url: "src/assets/logos/nike.webp", brand: "Nike" },
      { url: "src/assets/logos/vans.webp", brand: "Vans" },
      { url: "src/assets/logos/puma.webp", brand: "Puma" },
      { url: "src/assets/logos/converse.webp", brand: "Converse" },
      { url: "src/assets/logos/fila.webp", brand: "Fila" },
      { url: "src/assets/logos/reebok.webp", brand: "Reebok" }
    ];
    return(
      <section className="homePageContainer">
         <article className="homePageHeader">
            <p>SneakIT, Where Style Meets Comfort</p>
            <button onClick={()=> handleLink()}>Start Shopping</button>
         </article>
         <article className="homePageContent">
            <p>Most selled brands</p>
            <article className="logoContainer">
               {
                  logos.map((logo, index)=>(
                     <div key={index} onClick={()=> handleSneaker(logo.brand)} className="logoOfCompany">
                        <img style={{width:"200px"}} src={logo.url} alt={`image of the logo of ${logo.brand}`}/>
                     </div>
                  ))
               }
            </article>
         </article>
      </section>
    )   
  }; 