// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// Animated counter for statistics
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
    counterObserver.observe(statsSection);
}

// Skill bars animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            if (skillProgress) {
                const progress = skillProgress.getAttribute('data-progress');
                setTimeout(() => {
                    skillProgress.style.width = progress + '%';
                }, 100);
            }
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
    skillObserver.observe(card);
});

// Scroll reveal animation for sections
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Apply initial styles and observe sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    revealObserver.observe(section);
});

// Set first section (hero) to be visible immediately
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
}

// CTA buttons functionality
const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === 'View My Work') {
            document.querySelector('#projects').scrollIntoView({
                behavior: 'smooth'
            });
        } else if (this.textContent === 'Get In Touch') {
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simulate form submission
        alert(`Thank you ${name}! Your message has been received. I'll get back to you at ${email} soon!`);
        
        // Reset form
        this.reset();
    });
}

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    const projectBtn = card.querySelector('.project-btn');
    
    if (projectBtn) {
        projectBtn.addEventListener('click', function() {
            const projectName = card.querySelector('.project-info h3').textContent;
            alert(`Opening ${projectName}... (This would link to the actual project)`);
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText && heroImage) {
        heroText.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Add glitch effect on hover
const glitchElement = document.querySelector('.glitch');
if (glitchElement) {
    glitchElement.addEventListener('mouseenter', function() {
        this.classList.add('glitch-active');
        setTimeout(() => {
            this.classList.remove('glitch-active');
        }, 500);
    });
}

// Dynamic greeting based on time
function updateGreeting() {
    const hour = new Date().getHours();
    const tagline = document.querySelector('.tagline');
    
    if (tagline && tagline.textContent === 'Creative Developer & Designer') {
        let greeting = 'Creative Developer & Designer';
        if (hour < 12) {
            greeting = 'Good Morning! ' + greeting;
        } else if (hour < 18) {
            greeting = 'Good Afternoon! ' + greeting;
        } else {
            greeting = 'Good Evening! ' + greeting;
        }
        // Uncomment to enable time-based greeting
        // tagline.textContent = greeting;
    }
}

updateGreeting();

// Add typing effect to subtitle (optional)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Cursor trail effect (optional - can be enabled)
let cursorTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', function(e) {
    // Uncomment to enable cursor trail
    /*
    cursorTrail.push({x: e.clientX, y: e.clientY});
    if (cursorTrail.length > maxTrailLength) {
        cursorTrail.shift();
    }
    */
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Console message for developers
console.log('%c🎨 Welcome to my portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cLike what you see? Let\'s connect!', 'color: #764ba2; font-size: 14px;');

// Easter egg: Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s infinite';
    alert('🎉 You found the easter egg! 🎉');
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 2000);
}

// Add CSS for rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    .glitch-active {
        animation: glitch 0.3s infinite;
    }
    
    @keyframes glitch {
        0% {
            transform: translate(0);
        }
        20% {
            transform: translate(-2px, 2px);
        }
        40% {
            transform: translate(-2px, -2px);
        }
        60% {
            transform: translate(2px, 2px);
        }
        80% {
            transform: translate(2px, -2px);
        }
        100% {
            transform: translate(0);
        }
    }
`;
document.head.appendChild(style);