# Golden Gates Hotel - Premium React Website

A modern, responsive website for Golden Gates Hotel in Nyeri, Kenya. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, luxury hospitality design
- 📱 Fully responsive mobile-first approach
- 🎨 Premium Tailwind CSS styling with custom brand colors
- 🎬 Smooth animations with Framer Motion
- 🧭 Complete React Router navigation
- 🖼️ Interactive photo gallery with lightbox
- 📋 Reservation request forms with validation
- 🏨 Room showcase with detailed information
- 🎉 Events and conferences management pages
- 🗺️ Location and Google Maps integration
- ♿ Accessible and semantic HTML

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router DOM** - Navigation and routing
- **Framer Motion** - Animations
- **Lucide React** - Icon library
- **JavaScript/JSX** - Development language

## Project Structure

```
src/
├── assets/              # Images and static files
├── components/          # Reusable React components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Button.jsx
│   ├── RoomCard.jsx
│   ├── AmenityCard.jsx
│   ├── ExperienceCard.jsx
│   ├── BookingWidget.jsx
│   ├── SectionHeading.jsx
│   └── index.js
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Rooms.jsx
│   ├── RoomDetails.jsx
│   ├── Reservations.jsx
│   ├── Gallery.jsx
│   ├── Amenities.jsx
│   ├── Dining.jsx
│   ├── Events.jsx
│   ├── ThingsToDo.jsx
│   ├── Conferences.jsx
│   ├── Contact.jsx
│   └── index.js
├── data/               # Data files
│   └── rooms.js        # Rooms, amenities, experiences data
├── App.jsx            # Main app component with routing
├── main.jsx           # React entry point
└── index.css          # Global styles with Tailwind

public/
└── index.html         # HTML entry point
```

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd goldengates
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The site will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Brand Colors
Edit `tailwind.config.js` to customize:
- Primary Navy: `#1D2A42`
- Accent Gold: `#B79A63`
- Background: `#F5F4F1`

### Fonts
- Headings: Cormorant Garamond (elegant, editorial)
- Body: Manrope (clean, modern)

### Content
Update content in:
- `src/data/rooms.js` - Room data, amenities, experiences, testimonials
- Individual page files in `src/pages/`
- `src/components/Navbar.jsx` - Navigation structure
- `src/components/Footer.jsx` - Footer content

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, rooms, amenities, experiences |
| `/rooms` | Rooms | All available room categories |
| `/rooms/:roomId` | Room Details | Detailed room information |
| `/reservations` | Reservations | Booking request form |
| `/gallery` | Gallery | Photo gallery with lightbox |
| `/amenities` | Amenities | Services and facilities |
| `/dining` | Dining | Restaurant and cuisine information |
| `/events` | Events | Meetings and events services |
| `/things-to-do` | Things To Do | Activities and attractions |
| `/conferences` | Conferences | Conference facilities and pricing |
| `/contact` | Contact | Contact form and information |

## Key Features Explained

### Booking Widget
- Sticky widget on hero section
- Date pickers, guest count, room selection
- Form validation
- Navigation to reservations page

### Room Cards
- Image gallery
- Amenities display
- Occupancy information
- Quick book/explore buttons

### Gallery
- Category filtering
- Lightbox viewer
- Image navigation
- Keyboard controls

### Responsive Design
- Mobile-first approach
- Touch-friendly navigation
- Optimized for all screen sizes
- Hamburger menu on mobile

### Animations
- Scroll-triggered animations
- Smooth page transitions
- Hover effects on cards
- Fade and slide animations

## Deployment

### Build for Production
```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deploy Options
- **Vercel** - Recommended for Vite projects
- **Netlify** - Drag-and-drop or Git integration
- **GitHub Pages** - Static hosting
- **Any static host** - Nginx, Apache, etc.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Optimizations

- ✅ Lazy-loaded images
- ✅ Code splitting with React Router
- ✅ Optimized CSS with Tailwind purging
- ✅ Smooth scrolling
- ✅ Efficient animations with Framer Motion

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Color contrast compliance
- ✅ Alt text for images
- ✅ Form validation messages

## SEO

- ✅ Meta tags and descriptions
- ✅ Open Graph support
- ✅ Semantic HTML structure
- ✅ Image alt text
- ✅ Mobile-friendly design
- ✅ Fast page load times

## Brand Information

**Golden Gates Hotel**
- **Location:** Nyeri, Kenya
- **Email:** connect@goldengateshotels.com
- **Phone:** +254 707 029 292
- **P.O. Box:** 1621-10100, Nyeri, Kenya
- **Website:** www.goldengateshotels.com

## Placeholder Content

The website includes placeholder content that should be updated with:
- Real room prices and availability
- Authentic guest testimonials
- Actual hotel photography
- Real conference room photos
- Verified attraction information

## Future Enhancements

- Online booking system integration
- Payment gateway integration
- Newsletter subscription
- Blog/news section
- Multi-language support
- Virtual tours
- Live chat support
- Admin dashboard

## Support

For issues or questions about the website, contact Golden Gates Hotel directly.

## License

This website is proprietary to Golden Gates Hotel.

---

**Built with ❤️ for Golden Gates Hotel**
