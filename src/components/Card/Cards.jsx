import Card from "./Card";

const Cards = ({ imagePreescolar, imagePrimaria, imageSecundaria, imagePreparatoria, iconPresencial, iconOnline }) => {

    return(
        <>
            <a className="card__animate" href="">
                <Card
                image={imagePreescolar}
                paragraph= {'Preescolar'}
                icono={iconPresencial}
                iconoText={'Presencial'}
                />
            </a>
            <a className="card__animate" href="">
                <Card
                image={imagePrimaria}
                paragraph= {'Primaria'}
                icono={iconPresencial}
                iconoText={'Presencial'}
                />
            </a>
            <a className="card__animate" href="">
                <Card
                image={imageSecundaria}
                paragraph= {'Secundaria'}
                icono={iconPresencial}
                iconoText={'Presencial'}
                />
            </a>
            <a className="card__animate" href="prepa.html">
                <Card
                image={imagePreparatoria}
                paragraph= {'Preparatoria'}
                icono={iconOnline}
                iconoText={'En Línea'}
                />
            </a>
        </>
    )
}

export default Cards;