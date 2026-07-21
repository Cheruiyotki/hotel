import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero, SectionHeading, ExperienceCard } from '../components';
import { experiences } from '../data/rooms';

export const ThingsToDo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activities = [
    { icon: '🏃', title: 'Jogging', desc: 'Scenic jogging trails through our grounds and surrounding areas' },
    { icon: '🚶', title: 'Guided Nature Walks', desc: 'Expert-led walks through pristine forests and scenic trails' },
    { icon: '🎮', title: 'Team Games', desc: 'Group activities for team building and fun' },
    { icon: '♟️', title: 'Board Games', desc: 'Indoor entertainment and strategic games' },
    { icon: '🏸', title: 'Badminton', desc: 'Friendly sport and recreation' },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <Hero
        title="Things To Do"
        subtitle="Explore the natural wonders and cultural attractions around Nyeri"
        backgroundImage="https://images.unsplash.com/photo-1516426122078-8023e76319a7?w=1600&h=900&fit=crop"
      />

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Adventure Awaits"
            subtitle="From guided tours to outdoor activities, discover the best of Nyeri region"
          />

          {/* In-Hotel Activities */}
          <div>
            <h3 className="text-4xl font-heading font-bold text-primary-navy mb-8 text-center">
              In-Hotel Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {activities.map((activity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 text-center"
                >
                  <div className="text-5xl mb-3">{activity.icon}</div>
                  <h4 className="text-xl font-heading font-bold text-primary-navy mb-2">
                    {activity.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{activity.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Arranged Tours */}
      <section className="section bg-primary-light">
        <div className="container-custom">
          <SectionHeading
            title="Arranged Tours & Experiences"
            subtitle="Let us arrange unforgettable adventures in the Nyeri region"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, idx) => (
              <ExperienceCard key={experience.id} experience={experience} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Popular Experiences"
            subtitle="Our most sought-after activities and destinations"
          />

          {/* Aberdare National Park */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 card p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary-navy mb-4">
                  Aberdare National Park
                </h3>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  Explore one of Kenya's most scenic national parks, home to diverse wildlife and breathtaking mountain scenery. Our guides provide expert knowledge about the flora and fauna.
                </p>
                <p className="text-gray-600 text-base">
                  Distance: ~30km from hotel • Duration: Full day or half-day tours available
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1516426122078-8023e76319a7?w=500&h=400&fit=crop"
                alt="Aberdare"
                className="rounded-lg"
              />
            </div>
          </motion.div>

          {/* Thompson Falls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 card p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop"
                alt="Thompson Falls"
                className="rounded-lg order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-heading font-bold text-primary-navy mb-4">
                  Thompson Falls
                </h3>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  Visit the stunning Thompson Falls waterfall, a natural wonder near Nyeri with breathtaking views. The scenic location is perfect for photography and nature appreciation.
                </p>
                <p className="text-gray-600 text-base">
                  Distance: ~45km from hotel • Duration: 4-5 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mount Kenya */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary-navy mb-4">
                  Mount Kenya National Park
                </h3>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  Africa's second-highest mountain offers spectacular views and various trekking routes. From day hikes to multi-day expeditions, there's an option for every fitness level.
                </p>
                <p className="text-gray-600 text-base">
                  Distance: ~60km from hotel • Duration: Various duration options
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&h=400&fit=crop"
                alt="Mount Kenya"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Activities */}
      <section className="section bg-primary-light">
        <div className="container-custom text-center">
          <h2 className="text-5xl font-heading font-bold text-primary-navy mb-6">
            Book Your Adventure
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our concierge team to arrange tours, activities, and experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254707029292" className="btn btn-primary">
              CALL US
            </a>
            <a href="mailto:connect@goldengateshotels.com" className="btn btn-outline">
              EMAIL US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThingsToDo;
