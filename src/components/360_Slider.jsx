import { useState } from "react"
import "../styles/productPage.css"

export const Slider=({imageArray,image, productName})=>{
    const [index, setIndex]=useState(0)
    const [isMousePressed, setIsMousePressed] = useState(false);

    //Cambia el índice basado en el rango del input
    const slideImage = (e)=>{
        const value = Number(e.target.value);//value devuelve una string y se convierte a un numero
        setTimeout(() => {
            setIndex(value);
          }, 100); 
    }

    const handleMouseMove = (e) => {
        if (isMousePressed && imageArray.length > 0) {
            const mouseX = e.nativeEvent.offsetX; //Obtiene la cordenada del eje X donde esta pulsando el raton
            const width = e.target.offsetWidth; // Obtiene el ancho de la imagen
            const newIndex = Math.floor((mouseX / width) * imageArray.length); // Calcula el nuevo indice en base a la posición el cursor y el ancho de la iamge
            // Actualizar el índice solo si ha cambiado
             if (newIndex !== index) {
                setIndex(newIndex);
            }
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
        <section className="imageAndSlider">
            <figure>
                {/*hay productos que no tienen la galeria de imágenes de 360, si este es el caso, se muestra solo un imagen y se oculta el input*/}
                <img draggable="false" src={imageArray.length > 0 ? imageArray[index] : image}  
                    onMouseMove={handleMouseMove}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    alt={`Image of ${productName}`} 
                    loading="lazy"
                />
            </figure>
            {imageArray.length>0 &&(
                <input 
                    type="range"
                    min={0}
                    max={imageArray.length-1} 
                    value={index}
                    className="slider"
                    onChange={slideImage}
                />
            )}
        </section>
    )
}