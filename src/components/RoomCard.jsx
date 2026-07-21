import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Wifi, Tv, Wind } from 'lucide-react';

export const RoomCard = ({ room }) => {
  return (
    <div className="card card-hover overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="relative w-full h-64 md:h-72 overflow-hidden bg-gray-200">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-primary-gold/90 px-3 py-1 rounded-full text-sm font-semibold text-white">
          {room.occupancy} Guest{room.occupancy > 1 ? 's' : ''}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-navy mb-2">
          {room.name}
        </h3>
        
        <p className="text-sm text-primary-gold font-semibold mb-3 uppercase tracking-wide">
          {room.bedType}
        </p>

        <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
          {room.description}
        </p>

        {/* Amenities */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-800 mb-3">Amenities:</p>
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 3).map((amenity, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
              >
                {amenity}
              </span>
            ))}
            {room.amenities.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                +{room.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200">
          <Link to={`/rooms/${room.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              Explore
            </Button>
          </Link>
          <Link to="/reservations" className="flex-1">
            <Button variant="primary" size="sm" className="w-full">
              Book
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
