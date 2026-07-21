import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero, SectionHeading, Button } from '../components';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

export const Conferences = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const facilities = [
    'Conference Halls',
    'Projector',
    'Flip Charts & Markers',
    'Writing Pads & Pens',
    'Free Wi-Fi',
    'Swimming Pool Access',
    'Lunch Services',
    'Tea & Snacks',
    'Mineral Water',
    'Projection Screen',
    'Conference Materials',
  ];

  const fullDayInclusions = [
    'Tea and snacks at 10:00 and 16:00',
    'Buffet lunch with soft drink',
    '2 × 500ml mineral water',
    'Projection screen',
    'Flip charts and markers',
    'Pen and writing pad',
    'Conference hall',
    'Mint sweets',
  ];

  const halfDayInclusions = [
    'Morning or afternoon tea and snacks',
    'Buffet lunch with soft drink',
    '1 × 500ml mineral water',
    'Projection screen',
    'Flip charts and markers',
    'Pen and writing pad',
    'Conference hall',
    'Mint sweets',
  ];

  const individualCharges = [
    { item: 'Venue / Hall Hire', price: 'KSh 5,000' },
    { item: 'Conference Materials', price: 'KSh 120 per person' },
    { item: '500ml Mineral Water', price: 'KSh 80' },
    { item: 'Tea and 3 varieties of snacks', price: 'KSh 300 per person per break' },
    { item: 'Buffet lunch with soft drink', price: 'KSh 1,250' },
    { item: 'LCD Projector', price: 'KSh 5,000 per day' },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <Hero
        title="Conference Facilities Designed for Productive Gatherings"
        subtitle="Modern equipped spaces perfect for business meetings, conferences, and seminars"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop"
      />

      {/* Conference Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Conference Facilities"
            subtitle="Equipped with modern amenities and professional support"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-heading font-bold text-primary-navy mb-6">
                What We Offer
              </h3>
              <ul className="space-y-4">
                {facilities.map((facility, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="text-primary-gold flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-lg">{facility}</span>
                  </li>
                ))}
              </ul>
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
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-primary-light">
        <div className="container-custom">
          <SectionHeading
            title="Conference Pricing"
            subtitle="Transparent, all-inclusive packages"
          />

          {/* Full Day */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12 mb-8 border-2 border-primary-gold"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-4xl font-heading font-bold text-primary-navy mb-2">
                  Full Day Conference
                </h3>
                <p className="text-3xl font-bold text-primary-gold mb-8">
                  KSh 2,000 per person
                </p>
                <h4 className="text-xl font-bold text-primary-navy mb-4">Includes:</h4>
                <ul className="space-y-3">
                  {fullDayInclusions.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="text-primary-gold flex-shrink-0" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-primary-navy mb-4">
                  KSh 2,000
                </div>
                <p className="text-gray-600 mb-8">Per Person</p>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => navigate('/contact')}
                >
                  REQUEST BOOKING
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Half Day */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-4xl font-heading font-bold text-primary-navy mb-2">
                  Half Day Conference
                </h3>
                <p className="text-3xl font-bold text-primary-gold mb-8">
                  KSh 1,500 per person
                </p>
                <h4 className="text-xl font-bold text-primary-navy mb-4">Includes:</h4>
                <ul className="space-y-3">
                  {halfDayInclusions.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="text-primary-gold flex-shrink-0" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-primary-navy mb-4">
                  KSh 1,500
                </div>
                <p className="text-gray-600 mb-8">Per Person</p>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => navigate('/contact')}
                >
                  REQUEST BOOKING
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A La Carte Charges */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Individual Charges"
            subtitle="Customize your conference package"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary-gold">
                    <th className="text-left p-4 font-heading font-bold text-primary-navy">
                      Item
                    </th>
                    <th className="text-right p-4 font-heading font-bold text-primary-navy">
                      Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {individualCharges.map((charge, idx) => (
                    <tr key={idx} className={`border-b ${idx % 2 === 0 ? 'bg-primary-light' : ''}`}>
                      <td className="p-4 text-gray-700">{charge.item}</td>
                      <td className="p-4 text-right font-semibold text-primary-gold">
                        {charge.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-primary-light">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Golden Gates for Your Conference"
            subtitle="We provide professional, comfortable, and productive conference spaces"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Modern Facilities', desc: 'State-of-the-art equipment and technology' },
              { title: 'Professional Support', desc: 'Dedicated event coordination team' },
              { title: 'Comfortable Environment', desc: 'Well-appointed spaces with climate control' },
              { title: 'Quality Catering', desc: 'Delicious meals and refreshments' },
              { title: 'Scenic Location', desc: 'Peaceful setting conducive to productivity' },
              { title: 'Flexible Packages', desc: 'Customizable options for any group size' },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-heading font-bold text-primary-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="text-5xl font-heading font-bold text-primary-navy mb-6">
            Ready to Book Your Conference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our events team for more information and to reserve your dates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/contact')}
            >
              REQUEST CONFERENCE BOOKING
            </Button>
            <a href="tel:+254707029292">
              <Button variant="outline" size="lg">
                CALL US
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conferences;
