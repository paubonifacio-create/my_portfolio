// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        // Show success message (in a real scenario, you'd send this to a backend)
        alert(`Thanks ${name}! Your message has been "sent". In a real portfolio, this would be sent to your email or a backend service.`);
        
        // Reset form
        contactForm.reset();
    }
});

// Add scroll reveal animation
const revealElements = () => {
    const reveals = document.querySelectorAll('.skill-card, .project-card, .timeline-item');
    
    reveals.forEach((element, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize reveal styles
document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s ease ${i * 0.1}s`;
});

// Trigger on scroll
window.addEventListener('scroll', revealElements);

// Initial call
revealElements();

// Add typing effect to hero text
const tagline = document.querySelector('.tagline');
const originalText = tagline.textContent;
let charIndex = 0;

function typeWriter() {
    if (charIndex < originalText.length) {
        tagline.textContent = originalText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing effect after page load
setTimeout(typeWriter, 1000);

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.project-image').style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.project-image').style.transform = 'scale(1)';
    });
});

// Console easter egg
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; color: #00d4ff;');
console.log('%cFeel free to explore the code!', 'font-size: 14px; color: #7c3aed;');
console.log('%c"Every expert was once a beginner"', 'font-size: 12px; color: #71717a; font-style: italic;');