import { useState, useEffect } from 'react';

const HeroSection = () => {
  const slides = [
    {
      image: '/images/hero1.jpg',
      text: 'Sanarwa Kan Lafiya'
    },
    {
      image: '/images/hero2.jpg',
      text: 'Ƙarfafa Lafiyar Mata'
    },
    {
      image: '/images/hero3.jpg',
      text: 'Tallafawa Lafiyar Yara'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToNextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const goToPrevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div
          className="hero-image"
          style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("${slides[currentSlide].image}")` }}
        >
          <div className="hero-text">
            <p>{slides[currentSlide].text}</p>
          </div>
          <div className="slider-controls">
            <button className="slider-button prev" onClick={goToPrevSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L93.31,128Z"></path>
              </svg>
            </button>
            <button className="slider-button next" onClick={goToNextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L170.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;