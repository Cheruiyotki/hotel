import React from 'react';

export const SectionHeading = ({ 
  label = '',
  title = '',
  subtitle = '',
  centered = true,
  className = ''
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}>
      {label && (
        <p className="text-sm md:text-base font-semibold text-primary-gold uppercase tracking-widest mb-3 md:mb-4">
          {label}
        </p>
      )}
      {title && (
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-4 md:mb-6 leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
