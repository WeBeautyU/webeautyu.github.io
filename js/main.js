// ==========================================
// Language System
// ==========================================
const LanguageManager = {
    currentLang: localStorage.getItem('language') || null,
    
    init() {
        if (!this.currentLang) {
            this.showLanguageModal();
        } else {
            this.setLanguage(this.currentLang);
        }
        this.setupLanguageSwitchers();
    },
    
    showLanguageModal() {
        const modal = document.getElementById('languageModal');
        modal.classList.add('active');
        
        const languageButtons = document.querySelectorAll('.language-modal .language-btn');
        languageButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.currentTarget.dataset.lang;
                this.setLanguage(lang);
                modal.classList.remove('active');
            });
        });
    },
    
    setupLanguageSwitchers() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.currentTarget.dataset.lang;
                this.setLanguage(lang);
            });
        });
    },
    
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update all elements with data attributes
        document.querySelectorAll('[data-en]').forEach(element => {
            const text = element.dataset[lang];
            if (text) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else if (element.tagName === 'OPTION') {
                    element.textContent = text;
                } else {
                    element.textContent = text;
                }
            }
        });
        
        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
};

// ==========================================
// Navigation
// ==========================================
const Navigation = {
    init() {
        this.setupScrollEffect();
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupActiveLink();
    },
    
    setupScrollEffect() {
        const navbar = document.querySelector('.navbar');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    },
    
    setupMobileMenu() {
        const toggle = document.getElementById('mobileMenuToggle');
        const menu = document.getElementById('navMenu');
        
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            }
        });
    },
    
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },
    
    setupActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
};

// ==========================================
// Animations
// ==========================================
const AnimationManager = {
    init() {
        this.setupScrollAnimations();
    },
    
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements
        const animatedElements = document.querySelectorAll(
            '.procedure-card, .doctor-card, .gallery-item, .testimonial-card, .about-content, .contact-content'
        );
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
};

// ==========================================
// Contact Form
// ==========================================
const ContactForm = {
    init() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
        this.setupFloatingLabels();
    },
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            procedure: document.getElementById('procedure').value,
            message: document.getElementById('message').value
        };
        
        // Here you would normally send the data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        const currentLang = LanguageManager.currentLang;
        const message = currentLang === 'vi' 
            ? 'Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn sớm.'
            : 'Thank you! We will contact you soon.';
        
        alert(message);
        
        // Reset form
        e.target.reset();
    },
    
    setupFloatingLabels() {
        const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
        inputs.forEach(input => {
            input.setAttribute('placeholder', ' ');
        });
    }
};

// ==========================================
// Gallery
// ==========================================
const Gallery = {
    init() {
        this.setupGalleryModal();
    },
    
    setupGalleryModal() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const title = item.querySelector('h4').textContent;
                
                // Create modal
                const modal = document.createElement('div');
                modal.className = 'gallery-modal';
                modal.innerHTML = `
                    <div class="gallery-modal-content">
                        <span class="gallery-modal-close">&times;</span>
                        <img src="${img.src}" alt="${title}">
                        <h3>${title}</h3>
                    </div>
                `;
                
                document.body.appendChild(modal);
                
                // Add styles
                modal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.95);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    animation: fadeIn 0.3s ease;
                `;
                
                const modalContent = modal.querySelector('.gallery-modal-content');
                modalContent.style.cssText = `
                    max-width: 90%;
                    max-height: 90%;
                    text-align: center;
                `;
                
                const modalImg = modal.querySelector('img');
                modalImg.style.cssText = `
                    max-width: 100%;
                    max-height: 80vh;
                    object-fit: contain;
                    border-radius: 10px;
                `;
                
                const modalTitle = modal.querySelector('h3');
                modalTitle.style.cssText = `
                    color: white;
                    margin-top: 20px;
                    font-size: 1.5rem;
                `;
                
                const closeBtn = modal.querySelector('.gallery-modal-close');
                closeBtn.style.cssText = `
                    position: absolute;
                    top: 20px;
                    right: 30px;
                    color: white;
                    font-size: 40px;
                    cursor: pointer;
                    transition: color 0.3s ease;
                `;
                
                // Close modal
                closeBtn.addEventListener('click', () => {
                    modal.remove();
                });
                
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.remove();
                    }
                });
            });
        });
    }
};

// ==========================================
// Scroll to Top Button
// ==========================================
const ScrollToTop = {
    init() {
        this.createButton();
        this.setupScrollBehavior();
    },
    
    createButton() {
        const button = document.createElement('button');
        button.id = 'scrollToTop';
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: #c9a96e;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            z-index: 999;
        `;
        
        document.body.appendChild(button);
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        button.addEventListener('mouseenter', () => {
            button.style.background = '#2c3e50';
            button.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.background = '#c9a96e';
            button.style.transform = 'translateY(0)';
        });
    },
    
    setupScrollBehavior() {
        const button = document.getElementById('scrollToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                button.style.display = 'flex';
            } else {
                button.style.display = 'none';
            }
        });
    }
};

// ==========================================
// Loading Animation
// ==========================================
const LoadingManager = {
    init() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }
};

// ==========================================
// Procedure Cards Hover Effect
// ==========================================
const ProcedureCards = {
    init() {
        const cards = document.querySelectorAll('.procedure-card, .doctor-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
};

// ==========================================
// Accordion Functionality
// ==========================================
const AccordionManager = {
    init() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const accordionItem = header.parentElement;
                const isActive = accordionItem.classList.contains('active');
                
                // Close all accordion items
                document.querySelectorAll('.accordion-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    accordionItem.classList.add('active');
                }
            });
        });
        
        // Open first accordion item by default
        const firstItem = document.querySelector('.accordion-item');
        if (firstItem) {
            firstItem.classList.add('active');
        }
    }
};

// ==========================================
// FAQ Manager
// ==========================================
const FAQManager = {
    init() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // Toggle clicked item
                if (isActive) {
                    faqItem.classList.remove('active');
                } else {
                    faqItem.classList.add('active');
                }
            });
        });
    }
};

// ==========================================
// Initialize All Modules
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    LanguageManager.init();
    Navigation.init();
    AnimationManager.init();
    ContactForm.init();
    Gallery.init();
    ScrollToTop.init();
    LoadingManager.init();
    ProcedureCards.init();
    AccordionManager.init();
    FAQManager.init();
    
    console.log('WE BEAUTY U Medical Tourism Website - Initialized Successfully');
});

// ==========================================
// Utility Functions
// ==========================================
const Utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Handle window resize
window.addEventListener('resize', Utils.debounce(() => {
    // Recalculate any size-dependent features
    console.log('Window resized');
}, 250));

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}