import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export const Hero = ({ 
  title,
  subtitle,
  backgroundImage,
  ctaButtons = [],
  overlay = true
}) => {
  return (
    <div className="relative w-full h-screen md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {overlay && <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-2xl mb-8 md:mb-12 text-gray-100 leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        {ctaButtons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {ctaButtons.map((btn, idx) => (
              <Button
                key={idx}
                variant={btn.variant || 'primary'}
                size="lg"
                onClick={btn.onClick}
                className={btn.className}
              >
                {btn.label}
              </Button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
