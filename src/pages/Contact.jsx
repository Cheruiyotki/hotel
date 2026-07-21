import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Hero, SectionHeading, Button } from '../components';
import { MapPin, Mail, Phone, Clock, AlertCircle } from 'lucide-react';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
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
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
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
        title="Let's Plan Your Stay"
        subtitle="We're here to help with any questions or special requests"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop"
      />

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary-navy mb-8">
                Send us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg">
                  <p className="text-green-800">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
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

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="5"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold transition-all ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-4xl font-heading font-bold text-primary-navy mb-8">
                  Get in Touch
                </h3>
              </div>

              {/* Address */}
              <div className="card p-6 flex gap-4">
                <MapPin className="text-primary-gold flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-lg font-bold text-primary-navy mb-2">Address</h4>
                  <p className="text-gray-700">
                    P.O. Box 1621-10100<br />
                    Nyeri, Kenya
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="card p-6 flex gap-4">
                <Mail className="text-primary-gold flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-lg font-bold text-primary-navy mb-2">Email</h4>
                  <a 
                    href="mailto:connect@goldengateshotels.com"
                    className="text-primary-gold hover:underline"
                  >
                    connect@goldengateshotels.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="card p-6 flex gap-4">
                <Phone className="text-primary-gold flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-lg font-bold text-primary-navy mb-2">Phone</h4>
                  <a 
                    href="tel:+254707029292"
                    className="text-primary-gold hover:underline"
                  >
                    +254 707 029 292
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="card p-6 flex gap-4">
                <Clock className="text-primary-gold flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-lg font-bold text-primary-navy mb-2">Website</h4>
                  <a 
                    href="https://www.goldengateshotels.com"
                    className="text-primary-gold hover:underline"
                  >
                    www.goldengateshotels.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-primary-light">
        <div className="container-custom">
          <SectionHeading
            title="Find Us on the Map"
            subtitle="Located in the scenic outskirts of Nyeri"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

          <div className="text-center mt-8">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://maps.google.com/?q=Golden+Gates+Hotel+Nyeri', '_blank')}
            >
              GET DIRECTIONS
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Quick Services"
            subtitle="Connect with us directly"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              href="tel:+254707029292"
              className="card p-8 text-center hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-heading font-bold text-primary-navy mb-2">
                Call Us
              </h3>
              <p className="text-primary-gold font-semibold">+254 707 029 292</p>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              href="mailto:connect@goldengateshotels.com"
              className="card p-8 text-center hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-heading font-bold text-primary-navy mb-2">
                Email Us
              </h3>
              <p className="text-primary-gold font-semibold">Send Message</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={() => window.location.href = '/reservations'}
              className="card p-8 text-center hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="text-5xl mb-4">🛏️</div>
              <h3 className="text-xl font-heading font-bold text-primary-navy mb-2">
                Book a Room
              </h3>
              <p className="text-primary-gold font-semibold">Make Reservation</p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              href="https://maps.google.com/?q=Golden+Gates+Hotel+Nyeri"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-8 text-center hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="text-xl font-heading font-bold text-primary-navy mb-2">
                Directions
              </h3>
              <p className="text-primary-gold font-semibold">View Map</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* FAQ Info */}
      <section className="section bg-primary-light">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-8 md:p-12 flex gap-4">
            <AlertCircle className="text-primary-gold flex-shrink-0" size={28} />
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary-navy mb-3">
                Business Hours
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Guest Service Desk:</strong> Available 24/7
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Reservations:</strong> Monday - Sunday, 08:00 - 18:00
              </p>
              <p className="text-gray-600">
                For urgent matters outside business hours, please call our emergency line: +254 707 029 292
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
