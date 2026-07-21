import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero, SectionHeading, AmenityCard } from '../components';
import { amenities } from '../data/rooms';

export const Amenities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      {/* Hero */}
      <Hero
        title="Services & Amenities"
        subtitle="Discover our comprehensive facilities designed for your comfort and convenience"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop"
      />

      {/* All Amenities */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Facilities"
            subtitle="Premium amenities available to all our guests"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {amenities.map((amenity, idx) => (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                viewport={{ once: true }}
              >
                <AmenityCard amenity={amenity} index={0} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="section bg-primary-light">
        <div className="container-custom">
          
          {/* Swimming Pool */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-4xl font-heading font-bold text-primary-navy mb-4">
                  Swimming Pool
                </h3>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  Enjoy a dip in our Olympic half-size swimming pool. Towels are available at the pool area. Light snacks, cold beverages, and ice creams are available as you unwind under the sun.
                </p>
                <p className="text-primary-gold font-semibold text-lg">
                  Opening Hours: 06:00 - 18:00
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=600&h=500&fit=crop"
                alt="Swimming Pool"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Gym */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=500&fit=crop"
                alt="Gym"
                className="rounded-2xl shadow-2xl order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h3 className="text-4xl font-heading font-bold text-primary-navy mb-4">
                  Gym & Fitness
                </h3>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  Our fully equipped gym helps you keep fit and healthy, with treadmills, weights, and other exercise equipment.
                </p>
                <p className="text-primary-gold font-semibold text-lg">
                  Opening Hours: 06:00 - 21:00
                </p>
              </div>
            </div>
          </motion.div>

          {/* Business Centre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-4xl font-heading font-bold text-primary-navy mb-4">
                  Business Centre
                </h3>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  Our 24-hour guest service desk assists with your business needs while you are away.
                </p>
                <p className="text-primary-gold font-semibold text-lg">
                  Available: 24/7
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Business Centre"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Additional Services"
            subtitle="Everything you need for a comfortable and productive stay"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Free Wi-Fi',
                description: 'High-speed internet access throughout the hotel for seamless connectivity'
              },
              {
                title: 'Manicured Gardens',
                description: 'Beautiful landscaped gardens surrounded by lush forest scenery'
              },
              {
                title: '24-Hour Guest Service',
                description: 'Dedicated staff available round-the-clock to assist with any requests'
              },
              {
                title: 'Club House',
                description: 'Exclusive gathering space for guests to relax and socialize'
              },
              {
                title: 'Room Service',
                description: 'In-room dining with a selection of local and international cuisine'
              },
              {
                title: 'Conference Facilities',
                description: 'Modern equipped meeting spaces suitable for business meetings and events'
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-heading font-bold text-primary-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
