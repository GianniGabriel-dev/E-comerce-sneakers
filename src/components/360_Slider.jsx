import { useState } from "react"

export const Slider=({imageArray,image, productName})=>{
    const [index, setIndex]=useState(0)
    const [isMousePressed, setIsMousePressed] = useState(false);
    const slideImage = (e)=>{
        const value = e.target.value;
        setTimeout(() => {
            setIndex(value);
          }, 100); 
    }

    const handleMouseMove = (e) => {
        if (isMousePressed && imageArray.length > 0) {
            const mouseX = e.nativeEvent.offsetX; //Obtiene la cordenada del eje X donde esta pulsando el raton
            const width = e.target.offsetWidth; // Obtiene el ancho de la imagen
            const newIndex = Math.floor((mouseX / width) * imageArray.length); // Calcula el nuevo indice en base a la posición el cursor y el ancho de la iamge

          
                    setIndex(newIndex);
                
        }
    };

    // Detectar cuando el ratón se presiona sobre la imagen
    const handleMouseDown = () => {
        setIsMousePressed(true); 
    };

    //Detectar cuando se deja de mantener el click del ratón
    const handleMouseUp = () => {
        setIsMousePressed(false); 
    };
    //Detecta si el cursor se sale de la imagen
    const handleMouseLeave = () => {
        setIsMousePressed(false); 
    };

    return(
        <section>
            <figure>
                <img draggable="false" src={imageArray.length > 0 ? imageArray[index] : image} 
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                alt={`Image of ${productName}`} 
                style={{ cursor:"ew-resize", width:"300px"}}
                loading="lazy"
            />
            </figure>
            <input 
                type="range"
                min={0}
                max={imageArray.length-1} 
                value={index}
                className="slider"
                style={{ display: imageArray.length > 0 ? "inline" : "none" }}
                onChange={slideImage}
            />
        </section>
    )
}