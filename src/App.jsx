
import NavbarFix from "./components/navbar/Navbar";
import Portada from "./components/portada/Portada";
import { SliderData } from "./components/carousel/SliderData";
import ImageSlider from './components/carousel/Carousel';
import OfertaEducativa from "./components/OfertaEducativa/OfertaEducativa";
import Footer from "./components/Footer/Footer";

function App() {

  const images = {
    preescolar: "../../src/assets/preescolarCard.jpg",
    primaria: "../../src/assets/primaria.jpg",
    secundaria: "../../src/assets/secundaria.jpg",
    preparatora: "../../src/assets/prepa.jpg",
}

  return (
    <>
      <header>
        <NavbarFix/>
      </header>

      <main>
        <Portada/>
        <ImageSlider 
          slides={SliderData}
        />
        <section className="oferta__bg">
          <OfertaEducativa
          imagePreescolar={images.preescolar}
          imagePrimaria={images.primaria}
          imageSecundaria={images.secundaria}
          imagePreparatoria={images.preparatora}
          />
        </section>
      </main>
      
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
