import Cards from "../Card/Cards";

const OfertaEducativa = ({ imagePreescolar, imagePrimaria, imageSecundaria, imagePreparatoria}) => {

    const icons = {
        iconPresencial: "../../src/assets/aula.png",
        iconOnline: "../../src/assets/onlineIcon.png",
    }
    
    return(
        <>
            <h2 className="oferta__title">Oferta Educativa</h2>
            <section className="ofertaEducativa__container">
            <p className="oferta__paragraph">Proporcionamos una Educación Integral y de calidad, basada en los valores universales y en los Principios de la educación individual</p>
                <div className="cards__container">
                    <Cards
                        imagePreescolar={imagePreescolar}
                        imagePrimaria={imagePrimaria}
                        imageSecundaria={imageSecundaria}
                        imagePreparatoria={imagePreparatoria}
                        iconPresencial={icons.iconPresencial}
                        iconOnline={icons.iconOnline}
                    />
                </div>
            </section>
        </>
        
    )
}

export default OfertaEducativa;