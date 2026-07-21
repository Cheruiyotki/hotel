import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const ExperienceCard = ({ experience, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card card-hover overflow-hidden h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full h-64 md:h-72 overflow-hidden bg-gray-200">
        <img
          src={experience.image}
          alt={experience.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-navy mb-3">
          {experience.name}
        </h3>

        <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed flex-grow">
          {experience.description}
        </p>

        <Link to="/things-to-do" className="mt-auto">
          <Button variant="outline" size="md" className="w-full">
            Explore
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
