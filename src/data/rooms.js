export const rooms = [
  {
    id: 'premier',
    name: 'Premier Room',
    description: 'Luxurious rooms with premium furnishings and contemporary design, offering views of the lush gardens and surrounding natural landscape.',
    occupancy: 2,
    bedType: 'King Bed',
    amenities: ['Free Wi-Fi', 'En-suite Bathroom', 'Air Conditioning', 'Satellite TV', 'Work Desk', 'Premium Bedding'],
    image: 'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=800&h=600&fit=crop',
    category: 'premium'
  },
  {
    id: 'suite',
    name: 'Suite',
    description: 'Spacious suites featuring separate living areas, premium amenities, and scenic views. Perfect for extended stays and special occasions.',
    occupancy: 2,
    bedType: 'King Bed + Living Area',
    amenities: ['Living Room', 'Free Wi-Fi', 'Kitchenette', 'Premium Toiletries', 'Work Area', 'Air Conditioning'],
    image: 'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=800&h=600&fit=crop',
    category: 'premium'
  },
  {
    id: 'superior',
    name: 'Superior Room',
    description: 'Well-appointed rooms combining comfort and elegance with modern amenities. Ideal for business travelers and leisure guests.',
    occupancy: 2,
    bedType: 'Queen Bed',
    amenities: ['Free Wi-Fi', 'Modern Bathroom', 'Air Conditioning', 'Flat-screen TV', 'Work Desk', 'Minibar'],
    image: 'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=800&h=600&fit=crop',
    category: 'superior'
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    description: 'Comfortable rooms with stylish décor, providing all the essentials for a pleasant stay with garden or landscape views.',
    occupancy: 2,
    bedType: 'Queen Bed',
    amenities: ['Free Wi-Fi', 'Modern Amenities', 'Air Conditioning', 'TV', 'Work Desk', 'Bathroom'],
    image: 'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=800&h=600&fit=crop',
    category: 'standard'
  },
  {
    id: 'family',
    name: 'Family Room',
    description: 'Spacious rooms designed for families with multiple beds and comfortable living spaces. Perfect for family vacations.',
    occupancy: 4,
    bedType: 'Multi-bed Configuration',
    amenities: ['Free Wi-Fi', 'Multiple Beds', 'Air Conditioning', 'Bathroom', 'Lounge Area', 'TV'],
    image: 'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=800&h=600&fit=crop',
    category: 'family'
  },
  {
    id: 'twin',
    name: 'Twin Room',
    description: 'Comfortable rooms with twin beds, ideal for colleagues or friends traveling together.',
    occupancy: 2,
    bedType: 'Twin Beds',
    amenities: ['Free Wi-Fi', 'Modern Bathroom', 'Air Conditioning', 'TV', 'Work Area', 'Premium Bedding'],
    image: 'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=800&h=600&fit=crop',
    category: 'standard'
  },
  {
    id: 'standard',
    name: 'Standard Room',
    description: 'Cozy, well-appointed rooms offering essential comfort and convenience for a pleasant stay.',
    occupancy: 1,
    bedType: 'Single or Double Bed',
    amenities: ['Free Wi-Fi', 'Bathroom', 'Air Conditioning', 'TV', 'Essential Amenities'],
    image: 'https://images.unsplash.com/photo-1611632622527-1c7b15d9a01b?w=800&h=600&fit=crop',
    category: 'standard'
  },
];

export const amenities = [
  {
    id: 'swimming-pool',
    name: 'Swimming Pool',
    description: 'Enjoy a dip in our Olympic half-size swimming pool. Towels are available at the pool area. Light snacks, cold beverages, and ice creams are available as you unwind under the sun.',
    hours: '06:00 - 18:00',
    icon: 'Waves',
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=800&h=600&fit=crop',
  },
  {
    id: 'gym',
    name: 'Gym & Fitness',
    description: 'Our fully equipped gym helps you keep fit and healthy, with treadmills, weights, and other exercise equipment.',
    hours: '06:00 - 21:00',
    icon: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
  },
  {
    id: 'business-centre',
    name: 'Business Centre',
    description: 'Our 24-hour guest service desk assists with your business needs while you are away.',
    hours: '24/7',
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    id: 'wifi',
    name: 'Free Wi-Fi',
    description: 'High-speed internet access throughout the hotel for seamless connectivity.',
    hours: '24/7',
    icon: 'Wifi',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
  },
  {
    id: 'gardens',
    name: 'Manicured Gardens',
    description: 'Beautiful landscaped gardens surrounded by lush forest scenery for relaxation and photography.',
    hours: 'Always Open',
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1585399743302-eab8a8541af2?w=800&h=600&fit=crop',
  },
  {
    id: 'clubhouse',
    name: 'Club House',
    description: 'Exclusive gathering space for guests to relax, socialize, and enjoy entertainment.',
    hours: 'Upon Request',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1555636222-cae831c7a47f?w=800&h=600&fit=crop',
  },
  {
    id: 'guest-service',
    name: '24-Hour Guest Service',
    description: 'Dedicated staff available round-the-clock to assist with any requests or inquiries.',
    hours: '24/7',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    id: 'conference',
    name: 'Conference Facilities',
    description: 'Modern equipped meeting spaces suitable for business meetings, conferences, and private events.',
    hours: 'Upon Booking',
    icon: 'Users2',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
];

export const experiences = [
  {
    id: 'aberdare-park',
    name: 'Aberdare National Park',
    description: 'Explore one of Kenya\'s most scenic national parks, home to diverse wildlife and breathtaking mountain scenery.',
    image: 'https://images.unsplash.com/photo-1516426122078-8023e76319a7?w=800&h=600&fit=crop',
  },
  {
    id: 'guided-treks',
    name: 'Guided Nature Walks',
    description: 'Immerse yourself in nature with expert-guided walks through pristine forests and scenic trails.',
    image: 'https://images.unsplash.com/photo-1552632558-7ffb8c73a2a6?w=800&h=600&fit=crop',
  },
  {
    id: 'picnicking',
    name: 'Golden Gate Picnicking',
    description: 'Enjoy a memorable picnic in scenic locations with prepared meals and stunning views.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
  },
  {
    id: 'bush-dinners',
    name: 'Bush Dinners',
    description: 'Experience authentic outdoor dining under the stars with local cuisine and warm hospitality.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
  },
  {
    id: 'sweetwaters',
    name: 'Sweetwaters Game Reserve',
    description: 'Wildlife safari at a private game reserve featuring diverse animal species and scenic landscapes.',
    image: 'https://images.unsplash.com/photo-1516426122078-8023e76319a7?w=800&h=600&fit=crop',
  },
  {
    id: 'thompson-falls',
    name: 'Thompson Falls',
    description: 'Visit the stunning Thompson Falls waterfall, a natural wonder near Nyeri with breathtaking views.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  },
  {
    id: 'mau-mau-cave',
    name: 'Mau Mau Cave',
    description: 'Explore the historic Mau Mau Cave with guided tours explaining the area\'s cultural heritage.',
    image: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=800&h=600&fit=crop',
  },
  {
    id: 'baden-powell',
    name: 'Baden-Powell Grave',
    description: 'Visit the final resting place of Robert Baden-Powell, founder of the Scout Movement.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  },
  {
    id: 'nyeri-district',
    name: 'Nyeri Old District',
    description: 'Discover the rich history and culture of Nyeri through guided tours of historic sites.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  },
  {
    id: 'wajee-park',
    name: 'Wajee Nature Park',
    description: 'Explore beautiful nature trails and wildlife viewing areas at this scenic nature reserve.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    title: 'Business Traveler',
    text: '[Guest testimonial to be added by Golden Gates Hotel management]',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Honeymoon Guest',
    text: '[Guest testimonial to be added by Golden Gates Hotel management]',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Michael Kipchoge',
    title: 'Family Vacation',
    text: '[Guest testimonial to be added by Golden Gates Hotel management]',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
];
