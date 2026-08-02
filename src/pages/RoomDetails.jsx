import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { rooms } from '../data/rooms';
import { Button, SectionHeading, Seo } from '../components';
import { SITE } from '../config/site';
import { ChevronLeft, Users, BedDouble, Wifi, Tv, Wind } from 'lucide-react';

export const RoomDetails = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const room = rooms.find(r => r.id === roomId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-primary-navy mb-4">Room Not Found</h1>
          <Button onClick={() => navigate('/rooms')}>Back to Rooms</Button>
        </div>
      </div>
    );
  }

  const relatedRooms = rooms.filter(r => r.category === room.category && r.id !== room.id).slice(0, 3);

  return (
    <div className="w-full">
      <Seo
        title={`${room.name} — ${SITE.name}`}
        description={room.description.slice(0, 160)}
        image={room.image}
        url={`${SITE.url}/rooms/${room.id}`}
        type="product"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "HotelRoom",
          "name": room.name,
          "description": room.description,
          "image": room.images || [room.image],
          "url": `${SITE.url}/rooms/${room.id}`,
          "occupancy": room.occupancy
        }}
      />
      <section className="section bg-primary-light border-b border-white/60">
        <div className="container-custom">
          <button
            onClick={() => navigate('/rooms')}
            className="inline-flex items-center gap-2 text-primary-navy hover:text-primary-gold transition-colors text-sm px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm mb-8"
          >
            <ChevronLeft size={16} />
            <span>Back to Rooms</span>
          </button>

          <div className="max-w-4xl">
            <p className="text-primary-gold text-sm font-semibold uppercase tracking-[0.35em] mb-4">
              Room Details
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-navy mb-4">
              {room.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
              {room.bedType} · {room.description}
            </p>
          </div>

          <div className="mt-10 w-full max-w-full overflow-x-auto pb-2">
            <div className="flex gap-4 min-w-max">
              {room.images?.map((src, idx) => (
                <div key={idx} className="w-72 md:w-80 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg bg-white">
                  <img src={src} alt={`${room.name} view ${idx + 1}`} className="w-full h-56 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Room Features */}
                <div className="mb-12">
                  <h3 className="text-2xl font-heading font-bold text-primary-navy mb-6">
                    Room Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {room.amenities.map((amenity, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 bg-primary-light rounded-lg"
                      >
                        <span className="text-primary-gold text-xl">✓</span>
                        <span className="text-gray-700">{amenity}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Room Info */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8 bg-primary-light rounded-2xl mb-8">
                  <div className="text-center">
                    <Users className="text-primary-gold mx-auto mb-3" size={32} />
                    <p className="text-sm text-gray-600 mb-1">Occupancy</p>
                    <p className="text-2xl font-bold text-primary-navy">{room.occupancy}</p>
                  </div>
                  <div className="text-center">
                    <BedDouble className="text-primary-gold mx-auto mb-3" size={32} />
                    <p className="text-sm text-gray-600 mb-1">Bed Type</p>
                    <p className="text-lg font-bold text-primary-navy">{room.bedType}</p>
                  </div>
                  <div className="text-center">
                    <Wifi className="text-primary-gold mx-auto mb-3" size={32} />
                    <p className="text-sm text-gray-600 mb-1">Wi-Fi</p>
                    <p className="text-lg font-bold text-primary-navy">Free</p>
                  </div>
                </div>

                {/* Description */}
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-heading font-bold text-primary-navy mb-4">
                    About This Room
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our {room.name} is designed to provide the perfect blend of comfort and style. Whether you're traveling for business or leisure, this room offers everything you need for a memorable stay.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Each room is thoughtfully appointed with premium furnishings, modern amenities, and attention to detail that reflects our commitment to excellence.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Booking Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="card sticky top-32 p-8">
                <h3 className="text-2xl font-heading font-bold text-primary-navy mb-4">
                  Room Rate
                </h3>
                <p className="text-gray-600 mb-8">
                  Contact us for current rates and availability
                </p>
                <div className="bg-primary-light p-4 rounded-lg mb-8">
                  <p className="text-sm text-gray-600 mb-1">Standard Rate</p>
                  <p className="text-3xl font-bold text-primary-navy">
                    Contact us
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full mb-4"
                  onClick={() => window.location.href = '/reservations'}
                >
                  BOOK THIS ROOM
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => window.location.href = '/contact'}
                >
                  INQUIRE NOW
                </Button>

                {/* Info Box */}
                <div className="mt-8 p-4 bg-primary-light rounded-lg">
                  <p className="text-sm text-gray-600 mb-2 font-semibold">
                    ℹ️ Need Help?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Our team is here to assist with any questions about this room or your stay.
                  </p>
                  <a 
                    href="tel:+254707029292"
                    className="text-primary-gold font-semibold hover:underline"
                  >
                    +254 707 029 292
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Rooms */}
      {relatedRooms.length > 0 && (
        <section className="section bg-primary-light">
          <div className="container-custom">
            <SectionHeading
              title="Similar Rooms"
              subtitle="You might also be interested in these rooms"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedRooms.map((relatedRoom, idx) => (
                <motion.div
                  key={relatedRoom.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="card card-hover overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/rooms/${relatedRoom.id}`)}
                >
                  <div className="relative w-full h-64 overflow-hidden bg-gray-200">
                    <img
                      src={relatedRoom.image}
                      alt={relatedRoom.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-primary-navy mb-2">
                      {relatedRoom.name}
                    </h3>
                    <p className="text-sm text-gray-600">{relatedRoom.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
            Ready for Your Stay?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your {room.name} now and experience luxury comfort
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.location.href = '/reservations'}
          >
            RESERVE NOW
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RoomDetails;
