import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CakeSlice,
  ChefHat,
  Clock,
  Coffee,
  GlassWater,
  Soup,
  Utensils,
} from 'lucide-react';
import { Hero, SectionHeading, Button } from '../components';
import { menuSections } from '../data/menu';

const sectionIcons = {
  breakfast: Coffee,
  'snacks-eggs': CakeSlice,
  'light-dishes': Soup,
  'grill-local': Utensils,
  'chicken-fish': ChefHat,
  'platters-choma': Utensils,
  'pasta-desserts': CakeSlice,
  'hot-drinks': Coffee,
  'cold-drinks': GlassWater,
};

export const Dining = () => {
  const [activeMenuType, setActiveMenuType] = useState('food');
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash === '#hotel-menu') {
      window.setTimeout(() => {
        document.getElementById('hotel-menu')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    window.scrollTo(0, 0);
  }, [location.hash]);

  const activeSections = useMemo(
    () => menuSections.filter((section) => section.type === activeMenuType),
    [activeMenuType]
  );

  const selectedSection = useMemo(
    () => activeSections.find((section) => section.id === activeCategory) || activeSections[0],
    [activeCategory, activeSections]
  );

  const handleMenuTypeChange = (type) => {
    const nextSections = menuSections.filter((section) => section.type === type);
    setActiveMenuType(type);
    setActiveCategory(nextSections[0]?.id || '');
  };

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

          <div className="-mx-4 mb-14 bg-[#171717] px-4 py-5 shadow-xl md:-mx-8">
            <div className="mx-auto mb-5 flex w-fit rounded-full bg-white/10 p-1">
              {[
                { id: 'food', label: 'Food Menu', Icon: Utensils },
                { id: 'drinks', label: 'Drinks Menu', Icon: GlassWater },
              ].map(({ id, label, Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleMenuTypeChange(id)}
                  className={`flex min-w-[150px] items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition-all ${
                    activeMenuType === id
                      ? 'bg-primary-gold text-white shadow-lg'
                      : 'text-white/60 hover:text-white'
                  }`}
                  aria-pressed={activeMenuType === id}
                >
                  <Icon size={15} aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>

            <div className="flex gap-3 overflow-x-auto border-t border-white/10 pt-4">
              {activeSections.map((section) => {
                const Icon = sectionIcons[section.id] || Utensils;
                const isActive = selectedSection?.id === section.id;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveCategory(section.id)}
                    className={`group flex shrink-0 items-center gap-2 border-b-2 px-4 pb-4 pt-1 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all ${
                      isActive
                        ? 'border-primary-gold text-primary-gold'
                        : 'border-transparent text-white/55 hover:text-white'
                    }`}
                    aria-pressed={isActive}
                  >
                    <Icon size={14} aria-hidden="true" />
                    {section.title}
                  </button>
                );
              })}
            </div>
          </div>

          {selectedSection && (
            <motion.div
              key={selectedSection.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mb-6 text-center">
                <p className="mb-3 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.32em] text-primary-gold">
                  <span className="h-px w-10 bg-primary-gold" />
                  {selectedSection.eyebrow}
                  <span className="h-px w-10 bg-primary-gold" />
                </p>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy">
                  {selectedSection.title}
                </h3>
                <p className="mt-2 text-base text-primary-navy/80">
                  {selectedSection.description}
                </p>
                <div className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-primary-navy/75">
                  <Clock size={16} className="text-primary-gold" aria-hidden="true" />
                  <span>{selectedSection.availability}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {selectedSection.items.map((item, idx) => (
                  <motion.article
                    key={item.name}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="h-44 overflow-hidden bg-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-xl font-heading font-bold text-primary-navy">
                        {item.name}
                      </h4>
                      <p className="mt-2 min-h-[56px] text-sm text-primary-navy/75">
                        {item.description}
                      </p>
                      <p className="mt-5 text-sm font-bold uppercase tracking-wide text-green-700">
                        {item.price}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
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
