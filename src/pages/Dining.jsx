import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CakeSlice,
  ChefHat,
  Clock,
  Coffee,
  GlassWater,
  Utensils,
} from 'lucide-react';
import { Hero, SectionHeading, Button } from '../components';
import { menuSections } from '../data/menu';

const sectionIcons = {
  breakfast: Coffee,
  food: Utensils,
  snacks: CakeSlice,
  drinks: GlassWater,
};

export const Dining = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#hotel-menu') {
      window.setTimeout(() => {
        document.getElementById('hotel-menu')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    window.scrollTo(0, 0);
  }, [location.hash]);

  const navigate = useNavigate();

  const diningOptions = [
    {
      Icon: Coffee,
      title: 'Breakfast',
      description: 'Start your day with local and international breakfast favorites.',
    },
    {
      Icon: Utensils,
      title: 'Lunch & Dinner',
      description: 'Midday and evening dining prepared with fresh local ingredients.',
    },
    {
      Icon: CakeSlice,
      title: 'Snacks',
      description: 'Light bites, desserts, and poolside refreshments throughout the day.',
    },
    {
      Icon: GlassWater,
      title: 'Drinks',
      description: 'Hot drinks, fresh juices, soft drinks, and chilled beverages.',
    },
    {
      Icon: ChefHat,
      title: 'Special Occasions',
      description: 'Customized menus for celebrations, weddings, and meetings.',
    },
  ];

  return (
    <div className="w-full">
      <Hero
        title="Savor Every Moment"
        subtitle="Walk in & savor serenity, delightful delicacies, & comfort"
        backgroundImage="https://images.unsplash.com/photo-1504674900566-f4ff815c5c64?w=1600&h=900&fit=crop"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-primary-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Culinary Experience
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6 leading-tight">
                Exquisite Cuisine in Comfort
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Experience authentic Kenyan and international cuisine prepared by our chefs using fresh local ingredients. Our dining spaces offer a warm, welcoming ambience for relaxed meals, business lunches, family gatherings, and special occasions.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Prices are listed in Kenyan Shillings and can be confirmed with the hotel when placing an order or planning an event menu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => document.getElementById('hotel-menu')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  VIEW MENU
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/reservations')}
                >
                  MAKE A RESERVATION
                </Button>
              </div>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=700&h=800&fit=crop"
              alt="Freshly brewed coffee served in a hotel dining setting"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="section bg-primary-light">
        <div className="container-custom">
          <SectionHeading
            title="Our Dining Options"
            subtitle="From breakfast to dinner, Golden Gates Hotel offers comforting dishes and refreshing drinks for every part of the day."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {diningOptions.map(({ Icon, title, description }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-gold/10 text-primary-gold">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-navy mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="hotel-menu" className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Restaurant Menu"
            title="Golden Gates Hotel Menu"
            subtitle="A hotel-style dining menu with prices for breakfast, main meals, light bites, desserts, and drinks."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {menuSections.map((section, idx) => {
              const Icon = sectionIcons[section.id] || Utensils;

              return (
                <motion.article
                  key={section.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: (idx % 2) * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg border border-primary-gold/20 bg-golden-50 shadow-lg"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={section.image}
                      alt={`${section.title} at Golden Gates Hotel`}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/85 via-primary-navy/25 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-gold text-white shadow-lg">
                        <Icon size={24} aria-hidden="true" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary-gold">
                        {section.eyebrow}
                      </p>
                      <h3 className="mt-1 text-3xl font-heading font-bold text-white">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="mb-4 text-gray-700">
                      {section.description}
                    </p>
                    <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-primary-navy">
                      <Clock size={16} className="text-primary-gold" aria-hidden="true" />
                      <span>{section.availability}</span>
                    </div>

                    <div className="space-y-5">
                      {section.items.map((item) => (
                        <div key={item.name} className="border-b border-dotted border-primary-gold/50 pb-4 last:border-b-0 last:pb-0">
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="text-lg font-heading font-bold text-primary-navy">
                              {item.name}
                            </h4>
                            <p className="shrink-0 rounded-full bg-primary-navy px-3 py-1 text-sm font-bold text-white">
                              {item.price}
                            </p>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-primary-light">
        <div className="container-custom">
          <SectionHeading
            title="Dining Experience"
            subtitle="Our commitment to comfortable, memorable hotel dining."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Fresh Ingredients', desc: 'Locally sourced produce and carefully prepared dishes.' },
              { title: 'Hotel Service', desc: 'Friendly service for residents, walk-in guests, and groups.' },
              { title: 'Custom Menus', desc: 'Personalized options for meetings, weddings, and special occasions.' },
              { title: 'Warm Ambience', desc: 'Relaxed dining spaces suited to family meals and quiet evenings.' },
              { title: 'Poolside Refreshments', desc: 'Light snacks, cold beverages, and ice creams by the pool.' },
              { title: 'Event Catering', desc: 'Food and beverage support for conferences and celebrations.' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-lg"
              >
                <h3 className="text-xl font-heading font-bold text-primary-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
            Ready to Dine with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Reserve a table or ask our team about group menus and special dining experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/reservations')}
            >
              RESERVE A TABLE
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

export default Dining;
