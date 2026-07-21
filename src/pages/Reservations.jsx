import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Hero, SectionHeading, Button } from '../components';
import { Check, AlertCircle } from 'lucide-react';

export const Reservations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    rooms: '1',
    roomCategory: 'standard',
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: '1',
        rooms: '1',
        roomCategory: 'standard',
        fullName: '',
        email: '',
        phone: '',
        specialRequests: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <Hero
        title="Plan Your Perfect Stay"
        subtitle="Request your reservation and let us create an unforgettable experience"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop"
      />

      {/* Form Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            title="Reservation Request"
            subtitle="Fill in your details and we'll confirm your booking"
          />

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <Check className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">Reservation Request Submitted!</h3>
                  <p className="text-green-700">
                    Thank you for your reservation request. Our team will contact you shortly at the provided contact details to confirm your booking.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Stay Details */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary-navy mb-6">
                Stay Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all ${
                      errors.checkIn ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.checkIn && <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all ${
                      errors.checkOut ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.checkOut && <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Rooms *
                  </label>
                  <select
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Room Category *
                  </label>
                  <select
                    name="roomCategory"
                    value={formData.roomCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold"
                  >
                    <option value="standard">Standard Room</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="superior">Superior Room</option>
                    <option value="suite">Suite</option>
                    <option value="premier">Premier Room</option>
                    <option value="family">Family Room</option>
                    <option value="twin">Twin Room</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary-navy mb-6">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 707 029 292"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary-navy mb-6">
                Special Requests
              </h3>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Any special requests or dietary requirements?"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all"
              ></textarea>
            </div>

            {/* Important Notice */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3">
              <AlertCircle className="text-blue-600 flex-shrink-0" size={20} />
              <p className="text-sm text-blue-800">
                This is a reservation request form. Our team will contact you to confirm availability and finalize your booking details.
              </p>
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                REQUEST RESERVATION
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="section bg-primary-light">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-heading font-bold text-primary-navy mb-4">
            Prefer to Call?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Reach out to our booking team directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254707029292">
              <Button variant="primary" size="lg">
                CALL US
              </Button>
            </a>
            <a href="mailto:connect@goldengateshotels.com">
              <Button variant="outline" size="lg">
                EMAIL US
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
