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
            
            // Submit to your backend or CRM
            console.log('Form submitted:', formData);
            
            // TODO: Add your backend API call here
            // await fetch('/api/submit-form', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });
            
            // Show thank you message
            alert('Thank you! Your information has been received. We will contact you soon to discuss how we can help grow your business!');
            
            // Clear form
            contactForm.reset();
            
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
    }
});


// Show thank you popup after form submission
function showThankYouPopup() {
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    // Create popup box
    const popup = document.createElement('div');
    popup.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 12px;
        text-align: center;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease-out;
    `;
    
    popup.innerHTML = `
        <div style="font-size: 60px; margin-bottom: 20px;">✅</div>
        <h2 style="color: #1a1a1a; margin-bottom: 15px; font-size: 28px;">Thank You!</h2>
        <p style="color: #555; font-size: 18px; margin-bottom: 25px;">
            Your information has been received. We'll contact you soon to discuss how we can help grow your business!
        </p>
        <button id="closeThankYouPopup" style="
            background: #10b981;
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s ease;
        ">Close</button>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        #closeThankYouPopup:hover {
            background: #059669 !important;
        }
    `;
    document.head.appendChild(style);
    
    // Close popup when clicking close button
    document.getElementById('closeThankYouPopup').addEventListener('click', () => {
        overlay.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 300);
    });
    
    // Close popup when clicking outside
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(overlay);
            }, 300);
        }
    });
    
    // Add fadeOut animation
    const fadeOutStyle = document.createElement('style');
    fadeOutStyle.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(fadeOutStyle);
}
