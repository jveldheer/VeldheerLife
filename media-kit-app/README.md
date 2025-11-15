# Veldheer Life Media Kit

An elite, premium media kit web application for Veldheer Life - where faith, family, food, football, and performance all live under one roof.

## Features

- **Premium Design**: Masculine, beautiful, and engaging branding with a dark color scheme and gold accents
- **Smooth Animations**: Framer Motion powered scroll animations and parallax effects
- **Responsive**: Fully responsive design that works on all devices
- **High Performance**: Built with React and Vite for blazing fast load times
- **Modern Stack**: React, Tailwind CSS, and Framer Motion

## Sections

1. **Hero** - Bold introduction with Veldheer Life branding
2. **About** - Jared's story and who Veldheer Life reaches
3. **Metrics** - Impressive social media stats and audience data
4. **Media & Press** - Television and press features
5. **Brands & Partners** - Collaborations and partnership opportunities
6. **Lineman Vault** - Performance platform for offensive linemen
7. **Culinary** - Cooking philosophy and Next Level Chef feature
8. **Partnerships** - Ways to work with Jared
9. **Contact** - Get in touch and social media links

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Images

The app currently has placeholder elements for images. To add your images:

1. Place images in the `public` folder or `src/assets` folder
2. Update the components to reference your images:
   - Hero section background
   - About section photo
   - Media section stills from TV appearances
   - Brand logos
   - Lineman Vault training photos
   - Culinary section cooking photos
   - Contact section headshot

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- `veldheer-dark`: #0a0a0a (main background)
- `veldheer-gray`: #1a1a1a (secondary background)
- `veldheer-gold`: #c9a961 (primary accent)
- `veldheer-bronze`: #8b6914 (secondary accent)

### Fonts

The app uses three Google Fonts:
- **Playfair Display**: For display/headline text
- **Montserrat**: For headings and navigation
- **Inter**: For body text

### Content

All content is defined directly in the component files located in `src/components/`:
- Navigation.jsx
- Hero.jsx
- About.jsx
- Metrics.jsx
- Media.jsx
- Brands.jsx
- LinemanVault.jsx
- Culinary.jsx
- Partnerships.jsx
- Contact.jsx

## Deployment

### Netlify

```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Vercel

```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

### GitHub Pages

1. Update `vite.config.js` to set the base path
2. Run `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## Technology Stack

- **React** 18 - UI framework
- **Vite** 7 - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Scroll** - Smooth scrolling

## Performance

The application is optimized for performance:
- Lazy loading of images (when added)
- Optimized animations with Framer Motion
- Code splitting
- Production build optimized with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Veldheer Life. All rights reserved.

## Contact

For questions about the media kit, contact:
- Email: jared@veldheerlife.com
- Website: veldheerlife.com
