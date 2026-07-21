import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar, Footer } from './components';
import {
  Home,
  Rooms,
  RoomDetails,
  Reservations,
  Gallery,
  Amenities,
  Dining,
  Events,
  ThingsToDo,
  Conferences,
  Contact,
} from './pages';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 md:pt-24">
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/rooms" element={<PageTransition><Rooms /></PageTransition>} />
            <Route path="/rooms/:roomId" element={<PageTransition><RoomDetails /></PageTransition>} />
            <Route path="/reservations" element={<PageTransition><Reservations /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
            <Route path="/amenities" element={<PageTransition><Amenities /></PageTransition>} />
            <Route path="/dining" element={<PageTransition><Dining /></PageTransition>} />
            <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
            <Route path="/things-to-do" element={<PageTransition><ThingsToDo /></PageTransition>} />
            <Route path="/conferences" element={<PageTransition><Conferences /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
