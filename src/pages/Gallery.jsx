import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero, SectionHeading } from '../components';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'Hotel',
    'Rooms',
    'Swimming Pool',
    'Gardens',
    'Dining',
    'Events',
    'Conference',
    'Activities'
  ];

  const galleryImages = [
    {
      id: 1,
      category: 'Hotel',
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      alt: 'Hotel Exterior'
    },
    {
      id: 2,
      category: 'Rooms',
      src: 'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=800&h=600&fit=crop',
      alt: 'Room Interior'
    },
    {
      id: 3,
      category: 'Swimming Pool',
      src: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=800&h=600&fit=crop',
      alt: 'Swimming Pool'
    },
    {
      id: 4,
      category: 'Gardens',
      src: 'https://images.unsplash.com/photo-1585399743302-eab8a8541af2?w=800&h=600&fit=crop',
      alt: 'Gardens'
    },
    {
      id: 5,
      category: 'Dining',
      src: 'https://images.unsplash.com/photo-1504674900566-f4ff815c5c64?w=800&h=600&fit=crop',
      alt: 'Restaurant'
    },
    {
      id: 6,
      category: 'Events',
      src: 'https://images.unsplash.com/photo-1519671482677-de7152932a92?w=800&h=600&fit=crop',
      alt: 'Event Space'
    },
    {
      id: 7,
      category: 'Conference',
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      alt: 'Conference Room'
    },
    {
      id: 8,
      category: 'Activities',
      src: 'https://images.unsplash.com/photo-1552632558-7ffb8c73a2a6?w=800&h=600&fit=crop',
      alt: 'Activities'
    },
    {
      id: 9,
      category: 'Hotel',
      src: 'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=800&h=600&fit=crop',
      alt: 'Hotel Lounge'
    },
    {
      id: 10,
      category: 'Rooms',
      src: 'https://images.unsplash.com/photo-1611632622527-1c7b15d9a01b?w=800&h=600&fit=crop',
      alt: 'Room Detail'
    },
    {
      id: 11,
      category: 'Gardens',
      src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
      alt: 'Garden Path'
    },
    {
      id: 12,
      category: 'Activities',
      src: 'https://images.unsplash.com/photo-1516426122078-8023e76319a7?w=800&h=600&fit=crop',
      alt: 'Outdoor Activity'
    },
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const currentIndex = filteredImages.findIndex(img => img.id === selectedImage?.id);

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <Hero
        title="Photo Gallery"
        subtitle="Explore the beauty of Golden Gates Hotel through our collection of stunning photographs"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop"
      />

      {/* Gallery */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Photography Collection"
            subtitle="Browse through our gallery of beautiful hotel images"
          />

          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-2 md:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedImage(null);
                }}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-navy text-white shadow-lg'
                    : 'bg-gray-100 text-primary-navy hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                onClick={() => setSelectedImage(image)}
                className="relative h-64 md:h-72 overflow-hidden rounded-lg cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary-gold transition-colors"
              >
                <X size={32} />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />

              {/* Navigation */}
              <div className="flex justify-between items-center mt-6 text-white">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="p-2 hover:text-primary-gold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={32} />
                </button>

                <p className="text-center">
                  {currentIndex + 1} / {filteredImages.length}
                </p>

                <button
                  onClick={handleNext}
                  disabled={currentIndex === filteredImages.length - 1}
                  className="p-2 hover:text-primary-gold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={32} />
                </button>
              </div>

              {/* Image Description */}
              <p className="text-center text-white text-sm mt-4">
                {selectedImage.alt} • {selectedImage.category}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
