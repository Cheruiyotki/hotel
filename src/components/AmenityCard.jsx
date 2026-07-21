import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export const AmenityCard = ({ amenity, index = 0 }) => {
  const IconComponent = Icons[amenity.icon] || Icons.Star;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 md:p-8 text-center hover:border-2 hover:border-primary-gold transition-all duration-300"
    >
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-gold/10 to-primary-gold/5 rounded-full flex items-center justify-center">
          <IconComponent className="text-primary-gold" size={32} />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-heading font-bold text-primary-navy mb-3">
        {amenity.name}
      </h3>

      <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
        {amenity.description}
      </p>

      {amenity.hours && (
        <p className="text-sm font-semibold text-primary-gold">
          {amenity.hours}
        </p>
      )}
    </motion.div>
  );
};

export default AmenityCard;
