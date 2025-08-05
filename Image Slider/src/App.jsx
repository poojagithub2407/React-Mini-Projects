import React from 'react'
import ImageSlider from './components/ImageSlider';

const App = () => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1494526585095-c41746248156",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  ];

  return (
    <div>
    <h1 className='text-center font-bold text-2xl pt-6'>Image Slider</h1>
      <ImageSlider  data={imageUrls} />
    </div>
  )
}

export default App