import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: "/api/placeholder/800/600", alt: "Petite fille tenant un ballon lune" },
  { src: "/api/placeholder/800/600", alt: "Femme tenant une lune brillante" },
  { src: "/api/placeholder/800/600", alt: "Personne tenant une lune dans un marché coloré" },
  { src: "/api/placeholder/800/600", alt: "Jeune femme tenant une lune dans un paysage nocturne" }
];

const MoonImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default MoonImageCarousel;
