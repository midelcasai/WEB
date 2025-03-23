// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: false,
        mirror: false,
        offset: 80
    });

    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add box shadow and backdrop filter when scrolled
        if (scrollTop > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.boxShadow = '0 1px 4px rgba(0,0,0,0.02)';
            header.style.backdropFilter = 'blur(10px)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Button Ripple Effect
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                smoothScrollTo(targetId);
            }
            
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Form Submission with enhanced validation and feedback
    const contactForm = document.getElementById('form-contact');
    
    if (contactForm) {
        const formInputs = contactForm.querySelectorAll('input, textarea');
        
        // Add focus effect to form fields
        formInputs.forEach(input => {
            // Add active class to parent when input is focused
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('active');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('active');
                }
            });
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form fields
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Get all required fields
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    isValid = false;
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Simple email validation if email field exists
            if (email && !validateEmail(email.value.trim())) {
                email.classList.add('error');
                isValid = false;
            }
            
            if (isValid) {
                // Get form values for submission
                const formData = {};
                formInputs.forEach(input => {
                    formData[input.name] = input.value;
                });
                
                // Here you would typically send the data to a server
                console.log('Form submitted:', formData);
                
                // Show success message with animation
                const formContainer = contactForm.parentElement;
                formContainer.innerHTML = `
                    <div class="form-success" data-aos="fade-up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#4cd964" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <h3>¡Mensaje enviado con éxito!</h3>
                        <p>Gracias por contactarnos. Te responderemos lo antes posible.</p>
                    </div>
                `;
                
                // Apply fade in animation
                setTimeout(() => {
                    const formSuccess = document.querySelector('.form-success');
                    if (formSuccess) {
                        formSuccess.style.opacity = 1;
                    }
                }, 100);
            }
        });
    }

    // Helper function to validate email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper function for smooth scrolling
    function smoothScrollTo(targetId) {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Calculate header height for offset
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            // Smooth scroll with easing
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Smooth scrolling for anchor links with improved easing
    document.querySelectorAll('a[href^="#"]:not(.btn)').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Only apply to same-page links
            if (this.getAttribute('href') !== '#' && document.querySelector(this.getAttribute('href'))) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                smoothScrollTo(targetId);
            }
        });
    });

    // Check for hash in URL for direct linking to sections
    if (window.location.hash) {
        setTimeout(() => {
            smoothScrollTo(window.location.hash);
        }, 500); // Delay to ensure page is loaded
    }

    // Enhanced Parallax effect on abstract shapes
    const shapes = document.querySelectorAll('.shape');
    const colorfulLines = document.querySelectorAll('.colorful-line');
    
    if (shapes.length > 0 || colorfulLines.length > 0) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            
            // Animate shapes
            shapes.forEach((shape, index) => {
                const speed = 0.1 + (index * 0.05);
                const rotation = scrollPosition * 0.02 * (index % 2 === 0 ? 1 : -1);
                shape.style.transform = `translateY(${scrollPosition * speed}px) rotate(${rotation}deg)`;
            });
            
            // Animate colorful lines
            colorfulLines.forEach((line, index) => {
                const speed = 0.08 + (index * 0.03);
                const rotation = 45 + (scrollPosition * 0.01 * (index % 2 === 0 ? 1 : -1));
                line.style.transform = `translateY(${scrollPosition * speed}px) rotate(${rotation}deg)`;
            });
        });
    }

    // Projects Carousel
    const projectsGrid = document.querySelector('.projects-grid');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentSlide = 0;
    
    if (projectsGrid && prevButton && nextButton) {
        const projectCards = projectsGrid.querySelectorAll('.project-card');
        const totalSlides = Math.ceil(projectCards.length / getVisibleSlidesCount());
        let isAnimating = false;
        
        // Update carousel state on window resize
        window.addEventListener('resize', function() {
            updateCarouselState();
        });
        
        // Initialize carousel
        updateCarouselState();
        
        // Previous slide control
        prevButton.addEventListener('click', function() {
            if (isAnimating) return;
            moveCarousel(-1);
        });
        
        // Next slide control
        nextButton.addEventListener('click', function() {
            if (isAnimating) return;
            moveCarousel(1);
        });
        
        function moveCarousel(direction) {
            isAnimating = true;
            
            const visibleSlidesCount = getVisibleSlidesCount();
            const totalSlides = Math.ceil(projectCards.length / visibleSlidesCount);
            
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
            
            // Calculate how many cards to move
            const cardsPerSlide = visibleSlidesCount;
            const moveX = direction * 100;
            
            // Animate the transition
            projectsGrid.style.transition = 'transform 0.5s ease';
            projectsGrid.style.transform = `translateX(${-moveX}%)`;
            
            // After animation, reset position and update cards
            setTimeout(() => {
                projectsGrid.style.transition = 'none';
                projectsGrid.style.transform = 'translateX(0)';
                
                // Reorder the cards
                if (direction > 0) {
                    // Move first cards to the end
                    for (let i = 0; i < cardsPerSlide && i < projectCards.length; i++) {
                        if (projectsGrid.firstElementChild) {
                            projectsGrid.appendChild(projectsGrid.firstElementChild);
                        }
                    }
                } else {
                    // Move last cards to the beginning
                    for (let i = 0; i < cardsPerSlide && i < projectCards.length; i++) {
                        if (projectsGrid.lastElementChild) {
                            projectsGrid.prepend(projectsGrid.lastElementChild);
                        }
                    }
                }
                
                isAnimating = false;
                updateCarouselState();
            }, 500);
        }
        
        function getVisibleSlidesCount() {
            // Determine how many slides are visible based on viewport
            if (window.innerWidth < 768) {
                return 1;
            } else if (window.innerWidth < 1200) {
                return 2;
            } else {
                return 3;
            }
        }
        
        function updateCarouselState() {
            const visibleSlidesCount = getVisibleSlidesCount();
            
            // Show/hide carousel controls based on slide count
            if (projectCards.length <= visibleSlidesCount) {
                prevButton.style.display = 'none';
                nextButton.style.display = 'none';
            } else {
                prevButton.style.display = 'flex';
                nextButton.style.display = 'flex';
            }
        }
    }

    // FAQ Toggle functionality (for contact page)
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const isActive = this.classList.contains('active');
                
                // Close all other open FAQs
                faqQuestions.forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('active');
                });
                
                // Toggle current FAQ
                if (!isActive) {
                    this.classList.add('active');
                    answer.classList.add('active');
                }
            });
        });
    }

    // Add dynamic styles for ripple effect and form validation
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .form-group.active label {
            color: var(--color-black);
        }
        
        input.error, textarea.error {
            border-color: #ff3b30 !important;
            box-shadow: 0 0 0 3px rgba(255, 59, 48, 0.1) !important;
        }
        
        .form-success {
            text-align: center;
            padding: 30px;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        .form-success svg {
            margin-bottom: 20px;
        }
        
        .form-success h3 {
            font-size: 1.8rem;
            margin-bottom: 15px;
            color: #4cd964;
        }

        .text-center {
            text-align: center;
        }
    `;
    document.head.appendChild(style);
}); 