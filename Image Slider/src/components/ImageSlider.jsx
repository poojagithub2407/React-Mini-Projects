import React, { useEffect, useState } from 'react';

const ImageSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return; // Pause when hovered
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds interval
    return () => clearInterval(intervalId);
  }, [data.length, isHovered]);

  return (
    <div 
      className="flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center py-6 gap-4">
        <button 
          className="font-bold text-4xl cursor-pointer" 
          onClick={handlePrev}
          aria-label="Previous Slide"
        >
          ‹
        </button>

        <div className="relative w-[500px] h-[300px] overflow-hidden rounded">
          {data.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext} 
          className="font-bold text-4xl cursor-pointer"
          aria-label="Next Slide"
        >
          ›
        </button>
      </div>

      <div className="flex justify-center items-center gap-2">
        {data.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? 'bg-gray-200' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
