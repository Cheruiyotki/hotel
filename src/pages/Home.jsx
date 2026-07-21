import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Hero,
  BookingWidget,
  SectionHeading,
  Button,
  RoomCard,
  AmenityCard,
  ExperienceCard,
} from '../components';
import { rooms, amenities, experiences, testimonials } from '../data/rooms';
import { Star, ArrowRight } from 'lucide-react';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const featuredRooms = rooms.slice(0, 3);
  const featuredAmenities = amenities.slice(0, 4);
  const featuredExperiences = experiences.slice(0, 6);

  const whyChooseCards = [
    {
      title: 'Comfortable Rooms',
      description: 'Luxuriously appointed rooms with modern amenities',
      icon: '🛏️',
    },
    {
      title: 'Beautiful Gardens',
      description: 'Manicured gardens surrounded by lush forest scenery',
      icon: '🌿',
    },
    {
      title: 'Swimming Pool',
      description: 'Olympic-sized pool with complimentary towels and refreshments',
      icon: '🏊',
    },
    {
      title: 'Conference & Events',
      description: 'Spacious venues perfect for meetings and special occasions',
      icon: '🎉',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        title="Escape to Serenity at Golden Gates Hotel"
        subtitle="Experience warm country hospitality, contemporary comfort, lush gardens, and breathtaking views near the heart of Nyeri."
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop"
        ctaButtons={[
          {
            label: 'BOOK YOUR STAY',
            variant: 'secondary',
            onClick: () => {
              const bookingSection = document.getElementById('booking');
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }
          },
          {
            label: 'EXPLORE THE HOTEL',
            variant: 'outline',
            onClick: () => navigate('/amenities')
          }
        ]}
      />

      {/* Booking Widget */}
      <section id="booking" className="relative -mt-16 md:-mt-20 z-20 container-custom">
        <BookingWidget />
      </section>

      {/* Welcome Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=600&h=700&fit=crop"
                alt="Golden Gates Hotel Interior"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <p className="text-primary-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Welcome to Golden Gates
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6 leading-tight">
                Warm Country Hospitality, Contemporary Comfort
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
                Hello and welcome to Golden Gates Hotel, located on the outskirts of Nyeri Town, surrounded by lush forests and stunning views, including breathtaking views of Mt Kenya.
              </p>
              <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                Golden Gates Hotel combines the comforts and ambiance of a warm countryside retreat with a contemporary hotel experience. Surrounded by lush greenery, manicured gardens, bursts of flowers, and delightful natural scenery, the hotel offers an idyllic setting for relaxation, business, celebrations, and memorable getaways.
              </p>
              <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
                Located conveniently near Nyeri Town and the Aberdare National Park, Golden Gates Hotel offers an intimate retreat designed to create lasting memories.
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/amenities')}
              >
                DISCOVER OUR STORY
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-primary-light">
        <div className="container-custom">
          <SectionHeading
            label="Excellence"
            title="Why Choose Golden Gates"
            subtitle="Experience the perfect blend of luxury, nature, and warm Kenyan hospitality"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-heading font-bold text-primary-navy mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Accommodations"
            title="Stay in Comfort"
            subtitle="27 beautifully appointed rooms designed for business trips, family getaways, and peaceful escapes."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredRooms.map((room, idx) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <RoomCard room={room} />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/rooms')}
            >
              VIEW ALL ROOMS <ArrowRight className="inline ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section bg-primary-light">
        <div className="container-custom">
          <SectionHeading
            label="Facilities"
            title="Experiences & Amenities"
            subtitle="Comprehensive facilities designed for your comfort and convenience"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredAmenities.map((amenity, idx) => (
              <AmenityCard key={amenity.id} amenity={amenity} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Dine Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-primary-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Culinary
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6 leading-tight">
                Savor Every Moment
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Walk in & savor serenity, delightful delicacies, & comfort.
              </p>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                Experience authentic Kenyan and international cuisine prepared by our expert chefs using fresh local ingredients. From intimate dinners to grand celebrations, our dining spaces and culinary offerings cater to every occasion.
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/dining')}
              >
                EXPLORE DINING
              </Button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1504674900566-f4ff815c5c64?w=600&h=700&fit=crop"
                alt="Dining Experience"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section bg-primary-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1519671482677-de7152932a92?w=600&h=700&fit=crop"
                alt="Events & Meetings"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>

            {/* Content */}
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
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6 leading-tight">
                Meetings, Events & Special Days
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Our spacious contemporary meeting spaces are designed to meet your needs, equipped with modern facilities and suitable for large conferences or intimate private meetings.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Our beautifully landscaped gardens surrounded by forest scenery provide exquisite photographic opportunities for weddings and special occasions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/events')}
                >
                  PLAN YOUR EVENT
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/conferences')}
                >
                  VIEW CONFERENCE FACILITIES
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Adventure"
            title="Discover Nyeri & Beyond"
            subtitle="Explore the natural wonders and cultural attractions around Golden Gates Hotel"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredExperiences.map((experience, idx) => (
              <ExperienceCard key={experience.id} experience={experience} index={idx} />
            ))}
          </div>
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/things-to-do')}
            >
              VIEW ALL EXPERIENCES <ArrowRight className="inline ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section bg-primary-navy">
        <div className="container-custom">
          <SectionHeading
            label="Location"
            title="Your Gateway to Nyeri's Natural Beauty"
            subtitle="Strategically located near major attractions and natural wonders"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            
            {/* Nearby Attractions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h3 className="text-3xl font-heading font-bold mb-6">Proximity to Key Attractions</h3>
              <ul className="space-y-4">
                {[
                  'Nyeri Town Center',
                  'Aberdare National Park',
                  'Mt Kenya National Park',
                  'Thompson Falls',
                  'Baden-Powell Museum',
                  'Tea Plantations',
                  'Kimathi University',
                  'Lewa Wildlife Conservancy',
                ].map((attraction, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-lg"
                  >
                    <span className="text-primary-gold text-2xl">→</span>
                    {attraction}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.6824640960637!2d36.95099231477318!3d-0.4160881994647384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa6bfc2e2e2e2%3A0x1234567890abc!2sGolden%20Gates%20Hotel!5e0!3m2!1sen!2ske!4v1234567890"
              ></iframe>
            </motion.div>
          </div>

          <div className="text-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://maps.google.com/?q=Golden+Gates+Hotel+Nyeri', '_blank')}
            >
              GET DIRECTIONS
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Reviews"
            title="Guest Testimonials"
            subtitle="Hear what our valued guests have to say about their experience"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-primary-gold text-primary-gold" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-gold/15 text-sm font-bold text-primary-gold"
                      aria-hidden="true"
                    >
                      {testimonial.initials}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-primary-navy">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-primary-light">
        <div className="container-custom text-center">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary-navy mb-6">
            Book Your Stay Today
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the warmth, comfort, and natural beauty of Golden Gates Hotel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const bookingSection = document.getElementById('booking');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              BOOK NOW
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/contact')}
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
