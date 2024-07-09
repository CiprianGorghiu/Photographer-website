import React from 'react';
import ImageGallery from 'react-image-gallery';
import './imageCarousel.css';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: 'https://via.placeholder.com/800x400?text=Image+1',
    description: 'Imagine 1',
  },
  {
    original: 'https://via.placeholder.com/800x400?text=Image+2',
    description: 'Imagine 2',
  },
  {
    original: 'https://via.placeholder.com/800x400?text=Image+1',
    description: 'Imagine 3',
  },
];

const Gallery = () => {
  const galleryOptions = {
    items: images,
    showFullscreenButton: false,
    showPlayButton: false,
    showBullets: true, 
    autoPlay: true,
    slideInterval: 10000, 
  };

  return (
    <div className="gallery-container">
      <ImageGallery {...galleryOptions} />
    </div>
  );
};

export default Gallery;