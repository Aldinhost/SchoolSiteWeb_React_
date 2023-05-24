import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (

    <>
      <h2 className='slider__title'>¿Porque estudiar en ICA?</h2>
      <p className='slider__paragraph paragraph-blues'>Porque creamos experiencias educativas de calidad mediante:</p>
      <ul className='slider__list'>
        <li className='slider__paragraph paragraph-width'>Un enfoque pedagógico centrado en el estudiante que fomenta el pensamiento crítico, la resolución de problemas y el aprendizaje activo.</li>
        <li className='slider__paragraph paragraph-width'>Talleres extracurriculares de aprendizaje que complementan nuestro plan de estudios.</li>
        <li className='slider__paragraph paragraph-width'>Un entorno seguro que se esfuerza en promover el respeto, la inclusión y el apoyo mutuo.</li>
        <li className='slider__paragraph paragraph-width'>Docentes de inglés  que acompañan a los estudiantes a superar los desafíos del aprendizaje de un segundo idioma.</li>
      </ul>

      <div className='slider__container'>
        <section className='slider'>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt='travel image' className='image' />
                )}
              </div>
            );
          })}
        </section>
      </div>
      
    </>
  );
};

export default ImageSlider;
