// Configuration - Booking URLs for different plans
const BOOKING_URLS = {
    starter: 'https://brand.artfulautomation.com/consultation-appointment',
    growth: 'https://brand.artfulautomation.com/consultation-appointment-growth-370518',
    general: 'https://brand.artfulautomation.com/consultation-appointment-general-609889'
};

// Book a call function - now scrolls to contact form
function bookCall(event, plan = 'general') {
    event.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // Focus on first input field after scrolling
        setTimeout(() => {
            document.getElementById('firstName').focus();
        }, 500);
    }
}

// Add click handlers for pricing buttons
document.addEventListener('DOMContentLoaded', () => {
    // Starter plan buttons
    document.querySelectorAll('[data-plan="starter"]').forEach(button => {
        button.addEventListener('click', (e) => bookCall(e, 'starter'));
    });
    
    // Growth plan buttons
    document.querySelectorAll('[data-plan="growth"]').forEach(button => {
        button.addEventListener('click', (e) => bookCall(e, 'growth'));
    });
    
    // General CTA buttons (hero, etc.)
    document.querySelectorAll('.cta-button:not([data-plan])').forEach(button => {
        button.addEventListener('click', (e) => bookCall(e, 'general'));
    });
});

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




// Video Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const heroVideo = document.getElementById('heroVideo');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeModal = document.querySelector('.video-modal-close');
    
    // Open modal when hero video is clicked
    if (heroVideo) {
        heroVideo.parentElement.addEventListener('click', () => {
            videoModal.style.display = 'block';
            modalVideo.currentTime = 0;
            modalVideo.play();
        });
    }
    
    // Close modal when X is clicked
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            videoModal.style.display = 'none';
            modalVideo.pause();
        });
    }
    
    // Close modal when clicking outside video
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            modalVideo.pause();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.style.display === 'block') {
            videoModal.style.display = 'none';
            modalVideo.pause();
        }
    });
});



// Handle contact form submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                consent1: document.getElementById('consent1').checked,
                consent2: document.getElementById('consent2').checked,
                timestamp: new Date().toISOString()
            };
            
            // Disable submit button to prevent double submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';
            
            try {
                // Submit to your backend or CRM
                // For now, redirect to booking page after collecting info
                console.log('Form submitted:', formData);
                
                // Redirect to appropriate booking page based on plan
                const url = BOOKING_URLS.general;
                window.location.href = url;
                
            } catch (error) {
                console.error('Form submission error:', error);
                alert('There was an error submitting the form. Please try again or call us at (954) 857-3886');
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }
});
