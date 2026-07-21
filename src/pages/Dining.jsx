import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero, SectionHeading, Button } from '../components';
import { useNavigate } from 'react-router-dom';

export const Dining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const diningOptions = [
    {
      icon: '🍳',
      title: 'Breakfast',
      description: 'Start your day with a delicious spread of local and international breakfast options'
    },
    {
      icon: '🍽️',
      title: 'Lunch',
      description: 'Midday dining featuring fresh local ingredients prepared by our expert chefs'
    },
    {
      icon: '🌙',
      title: 'Dinner',
      description: 'Elegant evening dining with authentic Kenyan and international cuisine'
    },
    {
      icon: '🍰',
      title: 'Snacks',
      description: 'Light refreshments and pastries available throughout the day'
    },
    {
      icon: '🥤',
      title: 'Beverages',
      description: 'Premium selection of local and international drinks'
    },
    {
      icon: '🎉',
      title: 'Special Occasions',
      description: 'Customized menus for celebrations, weddings, and events'
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <Hero
        title="Savor Every Moment"
        subtitle="Walk in & savor serenity, delightful delicacies, & comfort"
        backgroundImage="https://images.unsplash.com/photo-1504674900566-f4ff815c5c64?w=1600&h=900&fit=crop"
      />

      {/* Dining Introduction */}
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
              <h2 className="text-5xl font-heading font-bold text-primary-navy mb-6">
                Exquisite Cuisine in Comfort
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Experience authentic Kenyan and international cuisine prepared by our expert chefs using fresh local ingredients. Our dining spaces offer warm, welcoming ambiance perfect for any occasion.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                From intimate dinners to grand celebrations, we cater to every taste and dietary preference with personalized service and attention to detail.
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/reservations')}
              >
                MAKE A RESERVATION
              </Button>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=600&h=700&fit=crop"
              alt="Fine Dining"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Dining Options */}
      <section className="section bg-primary-light">
        <div className="container-custom">
          <SectionHeading
            title="Our Dining Options"
            subtitle="From breakfast to dinner, we offer a diverse selection of culinary experiences"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diningOptions.map((option, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center hover:shadow-2xl transition-all"
              >
                <div className="text-6xl mb-4">{option.icon}</div>
                <h3 className="text-2xl font-heading font-bold text-primary-navy mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Menu Highlights"
            subtitle="Sample our featured dishes and specialties"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Kenyan Specialties */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-3xl font-heading font-bold text-primary-navy mb-6">
                Kenyan Specialties
              </h3>
              <ul className="space-y-4">
                {[
                  'Nyama Choma (Grilled Meat)',
                  'Ugali with Sukuma Wiki',
                  'Githeri (Maize & Beans)',
                  'Mukimo (Mashed Vegetables)',
                  'Irio (Kenyan Potato)',
                  'Mandazi (Fried Dough)',
                  'Kenyan Chapati',
                  'Nyama na Tamarind',
                ].map((dish, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-primary-gold text-xl">★</span>
                    <span className="text-gray-700 text-lg">{dish}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* International Cuisine */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-3xl font-heading font-bold text-primary-navy mb-6">
                International Cuisine
              </h3>
              <ul className="space-y-4">
                {[
                  'Grilled Fish with Lemon Butter',
                  'Filet Mignon with Red Wine Sauce',
                  'Pasta Primavera',
                  'Chicken Piccata',
                  'Vegetable Stir Fry',
                  'Grilled Vegetables',
                  'Seafood Platter',
                  'Mediterranean Salad',
                ].map((dish, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-primary-gold text-xl">★</span>
                    <span className="text-gray-700 text-lg">{dish}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dining Experience */}
      <section className="section bg-primary-light">
        <div className="container-custom">
          <SectionHeading
            title="Dining Experience"
            subtitle="Our commitment to culinary excellence"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Fresh Ingredients', desc: 'Locally sourced, seasonal produce and premium meats' },
              { title: 'Expert Chefs', desc: 'Highly trained culinary professionals with years of experience' },
              { title: 'Custom Menus', desc: 'Personalized menu options for dietary preferences' },
              { title: 'Fine Ambiance', desc: 'Elegant dining spaces with warm, welcoming atmosphere' },
              { title: 'Attentive Service', desc: 'Professional staff dedicated to your satisfaction' },
              { title: 'Special Events', desc: 'Catering for weddings, conferences, and celebrations' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
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

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="text-5xl font-heading font-bold text-primary-navy mb-6">
            Ready to Dine with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Reserve your table or inquire about our special dining experiences
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
