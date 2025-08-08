// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
});

function initializeAnimations() {
    // Navbar slide-in animation
    const navbar = document.querySelector('.navbar');
    gsap.fromTo(navbar, 
        {
            y: -100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 0.5
        }
    );

    // Hero section entrance animations
    const heroElements = {
        headline: document.querySelector('.animate-headline'),
        tagline: document.querySelector('.animate-tagline'),
        cta: document.querySelector('.animate-cta'),
        heroImage: document.querySelector('.heroImage'),
        bgShapes: document.querySelectorAll('.bg-shape')
    };

    // Timeline for hero animations
    const heroTimeline = gsap.timeline();

    // Background shapes animation
    heroTimeline.fromTo(heroElements.bgShapes, 
        {
            scale: 0,
            rotation: 0
        },
        {
            scale: 1,
            rotation: 360,
            duration: 1.5,
            ease: "back.out(1.7)",
            stagger: 0.2
        }
    );

    // Hero image fade in
    heroTimeline.fromTo(heroElements.heroImage,
        {
            opacity: 0,
            scale: 1.1
        },
        {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out"
        },
        "-=0.5"
    );

    // Headline animation
    heroTimeline.fromTo(heroElements.headline,
        {
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out"
        },
        "-=0.8"
    );

    // Tagline animation
    heroTimeline.fromTo(heroElements.tagline,
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        },
        "-=0.6"
    );

    // CTA button animation with pulse effect
    heroTimeline.fromTo(heroElements.cta,
        {
            opacity: 0,
            scale: 0.8,
            y: 20
        },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
        },
        "-=0.4"
    );

    // Add pulse animation to CTA button
    setTimeout(() => {
        heroElements.cta.classList.add('pulse');
    }, 2000);

    // Scroll-triggered animations for events section
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    
    scrollElements.forEach((element, index) => {
        gsap.fromTo(element,
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse"
                },
                delay: index * 0.2
            }
        );
    });

    // Floating animation for "Join Us" text
    const hitTexts = document.querySelectorAll('.hit');
    gsap.to(hitTexts, {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        stagger: 0.1,
        yoyo: true,
        repeat: -1
    });

    // Marquee animation enhancement
    const marquee = document.querySelector('.marquee-inner');
    gsap.fromTo(marquee,
        {
            x: 0
        },
        {
            x: "-50%",
            duration: 16,
            ease: "none",
            repeat: -1
        }
    );

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 80
                    },
                    ease: "power2.inOut"
                });
            }
        });
    });

    // Interactive hover effects for event cards
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // CTA button interactive effects
    const ctaButton = document.querySelector('.cta');
    ctaButton.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(1.7)"
        });
    });

    ctaButton.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)"
        });
    });

    // Parallax effect for background shapes
    gsap.to('.bg-shape', {
        y: -50,
        scrollTrigger: {
            trigger: '.hero',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // Text reveal animation for section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const text = title.textContent;
        title.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            title.appendChild(span);
        });

        gsap.to(title.querySelectorAll('span'), {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Glitch effect for headline
    const headline = document.querySelector('.headline');
    setInterval(() => {
        if (Math.random() > 0.95) {
            gsap.to(headline, {
                duration: 0.1,
                skewX: 2,
                ease: "power2.inOut",
                yoyo: true,
                repeat: 1
            });
        }
    }, 2000);

    // Performance optimization: Pause animations when not visible
    ScrollTrigger.addEventListener("refresh", () => {
        // Optimize performance
        gsap.globalTimeline.timeScale(1);
    });
}

// Add smooth scrolling polyfill for older browsers
if (!CSS.supports('scroll-behavior', 'smooth')) {
    // Fallback for browsers that don't support smooth scrolling
    const smoothScrollTo = (target, duration) => {
        const targetPosition = target.offsetTop - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    };
} 