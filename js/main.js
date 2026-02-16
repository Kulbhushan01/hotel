// Main JavaScript for Bodkhe Kaku Swaympak Ghar

'use strict';

// ========================================
// Preloader
// ========================================
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 1500);
});

// ========================================
// Header Scroll Effect
// ========================================
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Show/hide scroll to top button
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        if (scrollTop > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    lastScroll = scrollTop;
});

// ========================================
// Mobile Menu Toggle
// ========================================
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    const navLinkItems = navLinks.querySelectorAll('.nav-link');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ========================================
// Smooth Scrolling
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.getBoundingClientOffset().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Scroll to Top Button
// ========================================
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// Intersection Observer for Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
const elementsToObserve = document.querySelectorAll('.section-header, .feature-card, .about-image, .about-content');
elementsToObserve.forEach(el => observer.observe(el));

// ========================================
// Counter Animation
// ========================================
const counters = document.querySelectorAll('.stat-number');
let counterAnimated = false;

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counterAnimated) {
            counterAnimated = true;
            animateCounters();
        }
    });
}, observerOptions);

counters.forEach(counter => counterObserver.observe(counter));

function animateCounters() {
    counters.forEach(counter => {
        counter.classList.add('visible');
        const target = parseFloat(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (current > target) current = target;
                
                // Format number
                const displayValue = target % 1 === 0 ? Math.ceil(current) : current.toFixed(1);
                counter.textContent = displayValue;
                
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target % 1 === 0 ? target : target.toFixed(1);
            }
        };
        
        updateCounter();
    });
}

// ========================================
// Menu Tabs
// ========================================
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        const targetContent = document.getElementById(tabName);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// ========================================
// Contact Form Handling
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Validate form
        if (!formData.name || !formData.phone || !formData.message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // In production, this would send to backend
        // For now, show success message
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            alert(`Thank you for your message, ${formData.name}!\n\nWe have received your inquiry and will contact you shortly at ${formData.phone}.\n\nYou can also call us directly at 08484 823 276.`);
            
            // Reset form
            contactForm.reset();
            
            // Optional: Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Sorry, there was an error sending your message. Please call us directly at 08484 823 276.');
        }
    });
}

// ========================================
// Form Input Validation & Enhancement
// ========================================
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        // Allow only numbers and basic formatting
        let value = e.target.value.replace(/[^\d\s\-\+\(\)]/g, '');
        e.target.value = value;
    });
}

// ========================================
// Lazy Loading Images
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ========================================
// Keyboard Navigation
// ========================================
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (mobileToggle) mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ========================================
// Performance: Debounce Scroll Events
// ========================================
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll handler
const debouncedScroll = debounce(() => {
    // Any heavy scroll calculations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ========================================
// Accessibility: Skip to Main Content
// ========================================
const skipLink = document.querySelector('a[href="#main-content"]');
if (skipLink) {
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.getElementById('main-content') || document.querySelector('main');
        if (mainContent) {
            mainContent.setAttribute('tabindex', '-1');
            mainContent.focus();
        }
    });
}

// ========================================
// Performance: Reduce Motion for Users
// ========================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--animation-duration', '0ms');
}

// ========================================
// Online/Offline Status
// ========================================
window.addEventListener('online', () => {
    console.log('Connection restored');
});

window.addEventListener('offline', () => {
    alert('You are offline. Some features may not work properly.');
});

// ========================================
// Service Worker Registration (Optional - for PWA)
// ========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

// ========================================
// Print Event Handling
// ========================================
window.addEventListener('beforeprint', () => {
    // Expand all collapsed sections before printing
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'block';
    });
});

window.addEventListener('afterprint', () => {
    // Restore original state after printing
    document.querySelectorAll('.tab-content:not(.active)').forEach(tab => {
        tab.style.display = 'none';
    });
});

// ========================================
// Utility Functions
// ========================================

// Format phone number
function formatPhoneNumber(phone) {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{5})(\d{3})(\d{3})$/);
    if (match) {
        return match[1] + ' ' + match[2] + ' ' + match[3];
    }
    return phone;
}

// Format currency
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

// Get current time and show appropriate greeting
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
}

// Check if restaurant is open
function isRestaurantOpen() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute;
    
    // Lunch: 11:00 AM - 3:30 PM (660 - 930 minutes)
    // Dinner: 7:00 PM - 10:30 PM (1140 - 1350 minutes)
    
    const isLunchTime = currentTime >= 660 && currentTime <= 930;
    const isDinnerTime = currentTime >= 1140 && currentTime <= 1350;
    
    return isLunchTime || isDinnerTime;
}

// Display restaurant status
function updateRestaurantStatus() {
    const statusElement = document.getElementById('restaurant-status');
    if (statusElement) {
        if (isRestaurantOpen()) {
            statusElement.textContent = '🟢 Open Now';
            statusElement.classList.add('open');
        } else {
            statusElement.textContent = '🔴 Closed';
            statusElement.classList.add('closed');
        }
    }
}

// Initialize restaurant status on load
updateRestaurantStatus();
// Update every minute
setInterval(updateRestaurantStatus, 60000);

// ========================================
// Console Message
// ========================================
console.log('%c🍛 Bodkhe Kaku Swaympak Ghar', 'color: #D4691E; font-size: 24px; font-weight: bold;');
console.log('%cAuthentic Maharashtrian Cuisine Since 2010', 'color: #8B4513; font-size: 14px;');
console.log('%cWebsite developed with ❤️', 'color: #666; font-size: 12px;');

// ========================================
// Error Handling
// ========================================
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// ========================================
// Module Export (if using modules)
// ========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatPhoneNumber,
        formatCurrency,
        getGreeting,
        isRestaurantOpen
    };
}
