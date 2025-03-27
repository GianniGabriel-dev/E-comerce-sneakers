import { useNavigate } from "react-router-dom";


export const HomePage = () => {
   const navigate = useNavigate();
   const handleLink =()=>{
      navigate("/shop")
   }
    return(
      <section className="homePageContainer">
         <article className="homePageHeader">
            <p>SneakIT, Where Style Meets Comfort</p>
            <button onClick={()=> handleLink()}>Start Shopping</button>
         </article>
      </section>
    )   
  }; 