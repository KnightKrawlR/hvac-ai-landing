// Configuration - UPDATE THIS WITH YOUR GOHIGHLEVEL BOOKING URL
const BOOKING_URL = 'https://brand.artfulautomation.com/book-a-call'; // Replace with your actual booking URL

// Book a call function
function bookCall(event) {
    event.preventDefault();
    window.location.href = BOOKING_URL;
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.problem-card, .solution-card, .stat-card, .pricing-card, .faq-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Track CTA clicks (optional - for analytics)
document.querySelectorAll('.cta-button, .plan-button').forEach(button => {
    button.addEventListener('click', () => {
        // You can add analytics tracking here
        console.log('CTA clicked:', button.textContent);
    });
});

