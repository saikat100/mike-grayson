import React, { useState } from 'react';
import { FNFData } from './FNFData.js';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './FNF.css';

const FNF = ({ slides }) => {
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
       <h1 className="top-hedng">AREA OF LIFE</h1>
            <h5 className="top-sub-hedng">
            SOLUTIONS TO FIT YOUR TIME, YOUR LIFESTYLE AND YOUR BUDGET
            </h5>
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {FNFData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travelImage' className='fnf-image' />
            )}
          </div>
        );
      })}
    </section>
    <div className='slider-discription'>
        <div>
        <h2>START LIVING THE LIFE OF YOUR DREAMS</h2>
        <h5>Don’t know how to start? Our solution finder can help</h5>
        <button>Start Now</button>
        </div>
      </div>
    </>
  );
};

export default FNF;