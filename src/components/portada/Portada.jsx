import Ratio from 'react-bootstrap/Ratio';


const Portada = () => {

    return(
        <section className="home">

            <video className="video__slide" src="../../../src/assets/bgport.mp4" autoPlay muted loop> 
            </video>

            <div className="media__icons">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>

        </section>
    )
}

export default Portada;