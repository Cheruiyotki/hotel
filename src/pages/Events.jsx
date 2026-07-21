import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero, SectionHeading, Button } from '../components';
import { useNavigate } from 'react-router-dom';

export const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero */}
      <Hero
        title="Meetings, Events & Special Days"
        subtitle="Create unforgettable moments with our premium event spaces and expert services"
        backgroundImage="https://images.unsplash.com/photo-1519671482677-de7152932a92?w=1600&h=900&fit=crop"
      />

      {/* Meetings & Events */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-primary-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Professional Meetings
              </p>
              <h2 className="text-5xl font-heading font-bold text-primary-navy mb-6">
                Modern Meeting Spaces
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Our spacious contemporary meeting spaces are designed to meet your needs, equipped with modern facilities and suitable for large conferences or small private meetings.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                From corporate gatherings to team-building sessions, we provide the perfect venue with professional support and amenities.
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/conferences')}
              >
                VIEW CONFERENCE FACILITIES
              </Button>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=700&fit=crop"
              alt="Conference Room"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* Special Days & Weddings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1519671482677-de7152932a92?w=600&h=700&fit=crop"
              alt="Wedding"
              className="rounded-2xl shadow-2xl order-2 md:order-1"
            />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <p className="text-primary-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Celebrations
              </p>
              <h2 className="text-5xl font-heading font-bold text-primary-navy mb-6">
                Special Days & Weddings
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Our beautifully landscaped gardens surrounded by forest scenery provide exquisite photographic opportunities for your special day.
              </p>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Customize your own menu with our chef and let us help fulfill your dream with delightful tastes. Our well-lit manicured gardens and cocktail pool setups keep the fun and romance going throughout the day and into the night.
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                PLAN YOUR SPECIAL DAY
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Services */}
      <section className="section bg-primary-light">
        <div className="container-custom">
          <SectionHeading
            title="Our Event Services"
            subtitle="Everything you need for a successful event"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Venue Rental', desc: 'Spacious, elegant event spaces for any occasion' },
              { title: 'Catering', desc: 'Customized menus with professional service' },
              { title: 'Decorations', desc: 'Beautiful setup and decoration services' },
              { title: 'Audio & Visual', desc: 'State-of-the-art AV equipment and technical support' },
              { title: 'Event Planning', desc: 'Expert coordination from concept to execution' },
              { title: 'Accommodation', desc: 'Room packages for out-of-town guests' },
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
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Events We Host"
            subtitle="From corporate meetings to intimate celebrations"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '💒', title: 'Weddings', desc: 'Create your dream wedding in our beautiful gardens' },
              { icon: '🎓', title: 'Graduations', desc: 'Celebrate academic achievements in style' },
              { icon: '🎂', title: 'Birthdays & Anniversaries', desc: 'Mark special milestones with loved ones' },
              { icon: '💼', title: 'Corporate Events', desc: 'Team building, conferences, and business dinners' },
              { icon: '🏆', title: 'Award Ceremonies', desc: 'Prestigious venue for recognition events' },
              { icon: '🎉', title: 'Social Gatherings', desc: 'Any celebration deserves a special place' },
            ].map((eventType, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="text-6xl mb-4">{eventType.icon}</div>
                <h3 className="text-2xl font-heading font-bold text-primary-navy mb-3">
                  {eventType.title}
                </h3>
                <p className="text-gray-600">{eventType.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-primary-light">
        <div className="container-custom text-center">
          <h2 className="text-5xl font-heading font-bold text-primary-navy mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Contact our events team for a consultation
          </p>
          <p className="text-lg text-gray-700 mb-8">
            <a href="mailto:connect@goldengateshotels.com" className="text-primary-gold font-semibold hover:underline">
              connect@goldengateshotels.com
            </a>
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/contact')}
          >
            GET IN TOUCH
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Events;
