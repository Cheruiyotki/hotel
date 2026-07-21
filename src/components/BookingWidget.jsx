import React, { useState } from 'react';
import { Button } from './Button';
import { Calendar, Users, BedDouble } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BookingWidget = ({ className = '' }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'standard',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/reservations', { state: { bookingData: formData } });
  };

  return (
    <div className={`bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-3">
        
        {/* Check-in */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <Calendar size={16} className="inline mr-2" />
            Check-in
          </label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
          />
        </div>

        {/* Check-out */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <Calendar size={16} className="inline mr-2" />
            Check-out
          </label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
          />
        </div>

        {/* Guests */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <Users size={16} className="inline mr-2" />
            Guests
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all bg-white cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        {/* Room Type */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <BedDouble size={16} className="inline mr-2" />
            Room Type
          </label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all bg-white cursor-pointer"
          >
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="superior">Superior</option>
            <option value="suite">Suite</option>
            <option value="premier">Premier</option>
          </select>
        </div>

        {/* Button */}
        <div className="lg:col-span-1 flex items-end">
          <Button 
            type="submit" 
            variant="primary" 
            size="md"
            className="w-full h-12 md:h-14"
          >
            Check Availability
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingWidget;
