import { FaBeer } from "react-icons/fa";

const Card = ({image, paragraph, icono, iconoText }) =>{

    const cardStyles = {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",    
        filter: "brightness(0.5)",
        boxShadow: "1px 5px 10px -8px rgba(0,0,0,0.92)",
        borderRadius: "0px"
  }

    return(

        <>
            <div className="card__container">
                <div style={cardStyles}>

                </div>
                <div className="card__content">
                    <p className="card__content-paragraph">{paragraph}</p>
                    <div className="card__content-icon">
                        <img src={icono} alt="aula icon" />
                        <p>{iconoText}</p>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Card;