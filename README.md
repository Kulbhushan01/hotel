# 🍛 Bodkhe Kaku Swaympak Ghar - Website

Modern, responsive website for Bodkhe Kaku Swaympak Ghar - Authentic Maharashtrian Home-Style Cuisine

## 📁 Project Structure

```
bodkhe-kaku-website/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Mobile responsive styles
├── js/
│   ├── menu-data.js       # Menu items data
│   └── main.js            # Main JavaScript functionality
├── images/                # Images folder (add your images here)
└── README.md             # This file
```

## ✨ Features

### 🎨 Design Features
- **Modern & Animated**: Smooth animations and transitions
- **Fully Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Professional UI**: Inspired by premium restaurant websites
- **Optimized Performance**: Fast loading and smooth scrolling
- **Accessibility**: Keyboard navigation and screen reader friendly

### 📱 Sections
1. **Hero Section**: Animated hero with floating elements
2. **Features**: 6 key features with icon cards
3. **About**: Story section with animated badge
4. **Stats**: Animated counter (15+ years, 50+ items, 1000+ customers)
5. **Menu**: Tabbed menu (Thalis, Main Course, Snacks)
6. **Gallery**: Image gallery with hover effects
7. **Contact**: Contact info + working contact form
8. **Map**: Embedded Google Maps
9. **Footer**: Complete footer with social links

### ⚡ Interactive Features
- Preloader animation
- Sticky header that changes on scroll
- Mobile hamburger menu
- Smooth scroll to sections
- Menu tabs switching
- Animated counters
- Scroll-to-top button
- Form validation
- Hover effects throughout

## 🚀 Quick Start

### 1. Setup
Simply open `index.html` in your web browser. No build process required!

### 2. Customization

#### Update Business Information
Edit `index.html`:
- Line 70-80: Update phone number
- Line 500-520: Update address
- Line 600-610: Update hours

#### Change Colors
Edit `css/style.css` (lines 6-14):
```css
:root {
    --primary: #D4691E;     /* Change main color */
    --secondary: #8B4513;   /* Change secondary color */
    --accent: #FFB74D;      /* Change accent color */
}
```

#### Update Menu Items
Edit `js/menu-data.js`:
- Add/remove items in `menuData` object
- Update prices
- Change descriptions

#### Add Your Images
1. Add images to `images/` folder
2. Update image URLs in `index.html`

## 📱 Mobile Responsive

The website is fully responsive and tested on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px-1920px)
- ✅ Tablet (768px-1024px)
- ✅ Mobile (320px-768px)

### Breakpoints
- 1024px: Tablet layout
- 768px: Mobile layout with hamburger menu
- 480px: Small mobile optimizations
- 360px: Extra small devices

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 File Details

### index.html
Main HTML structure with all sections and content.

### css/style.css
Main stylesheet containing:
- Variables and reset styles
- Preloader styles
- Header and navigation
- Hero section with animations
- All section styles
- Component styles (cards, buttons, forms)
- Footer styles

### css/responsive.css
Responsive styles for all screen sizes:
- Tablet styles (max-width: 1024px)
- Mobile styles (max-width: 768px)
- Small mobile (max-width: 480px)
- Extra small (max-width: 360px)
- Landscape orientation
- Print styles
- Accessibility (reduced motion, high contrast)

### js/menu-data.js
Menu data and management:
- Menu items organized by category
- Menu card generation
- Order functionality

### js/main.js
Main JavaScript functionality:
- Preloader
- Header scroll effects
- Mobile menu toggle
- Smooth scrolling
- Intersection Observer animations
- Counter animations
- Menu tab switching
- Form handling
- Utility functions

## 🔧 Customization Guide

### Change Logo
Replace logo text in `index.html` line 60:
```html
<div class="logo">
    <i class="fas fa-utensils"></i>
    <span>Your Restaurant Name</span>
</div>
```

### Update Social Links
Edit `index.html` lines 800-810:
```html
<div class="social-links">
    <a href="https://facebook.com/yourpage">Facebook</a>
    <a href="https://instagram.com/yourpage">Instagram</a>
    ...
</div>
```

### Modify Contact Form
Form handler is in `js/main.js` lines 150-180.
To connect to a backend:
```javascript
const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    body: JSON.stringify(formData)
});
```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Create GitHub repository
2. Upload files
3. Go to Settings → Pages
4. Select branch and save
5. Your site will be live!

### Option 2: Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop your folder
3. Site goes live instantly!

### Option 3: Traditional Hosting
1. Upload via FTP
2. Place files in public_html or www folder
3. Access via your domain

## 📊 Performance Tips

1. **Optimize Images**: Compress images before upload
2. **Enable Caching**: Add cache headers on server
3. **Minify Files**: Minify CSS and JS for production
4. **Use CDN**: Consider using CDN for static assets
5. **Lazy Loading**: Images already use lazy loading

## 🐛 Troubleshooting

### Images not showing
- Check file paths are correct
- Ensure images are in `images/` folder
- Check file extensions match (case-sensitive on Linux servers)

### Menu not loading
- Ensure `js/menu-data.js` is loaded before `js/main.js`
- Check browser console for errors

### Mobile menu not working
- Verify JavaScript is enabled
- Check if `js/main.js` is loaded correctly
- Clear browser cache

### Form not submitting
- Check `js/main.js` form handler
- Ensure form IDs match
- Look for console errors

## 📞 Support

For questions or issues:
- Phone: 08484 823 276
- Location: Nirala Bazar, Chhatrapati Sambhajinagar

## 📄 License

© 2026 Bodkhe Kaku Swaympak Ghar. All Rights Reserved.

## 🙏 Credits

- **Fonts**: Google Fonts (Poppins, Playfair Display)
- **Icons**: Font Awesome 6
- **Images**: Unsplash (replace with your own)

---

**Made with ❤️ for authentic Maharashtrian cuisine lovers**
