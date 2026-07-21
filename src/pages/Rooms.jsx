import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero, SectionHeading, RoomCard } from '../components';
import { rooms } from '../data/rooms';

export const Rooms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const groupedRooms = {
    premium: rooms.filter(r => r.category === 'premium'),
    superior: rooms.filter(r => r.category === 'superior'),
    standard: rooms.filter(r => r.category === 'standard'),
    family: rooms.filter(r => r.category === 'family'),
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <Hero
        title="Rooms Designed for Rest & Comfort"
        subtitle="Choose from our collection of luxuriously appointed rooms, each offering unique comfort and style"
        backgroundImage="https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=1600&h=900&fit=crop"
      />

      {/* All Rooms */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Room Categories"
            subtitle="27 beautifully appointed rooms designed for every guest"
          />

          {/* All Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, idx) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                viewport={{ once: true }}
              >
                <RoomCard room={room} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-primary-light">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
            Ready to Book Your Room?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Reserve your perfect stay at Golden Gates Hotel and experience warmth, comfort, and natural beauty.
          </p>
          <button
            onClick={() => window.location.href = '/reservations'}
            className="btn btn-primary"
          >
            MAKE A RESERVATION
          </button>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
