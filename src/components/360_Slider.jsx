import { useState } from "react"

export const Slider=({imageArray, productName})=>{
    const [index, setIndex]=useState(0)

    const slideImage = (e)=>{
        const value = e.target.value;
        setTimeout(() => {
            setIndex(value);
          }, 100); 
    }
    return(
        <section>
            <figure>
                <img src={imageArray[index]} 
                alt={`Image of ${productName}`} 
                loading="lazy"
            />
            </figure>
            <input 
                type="range"
                min={0}
                max={imageArray.length-1} 
                className="slider"
                onChange={slideImage}
            />
        </section>
    )
}