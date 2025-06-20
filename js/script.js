document.addEventListener('DOMContentLoaded', () => {
            // Mobile menu toggle
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            menuToggle?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));
        
            // Smooth scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', e => {
                    e.preventDefault();
                    const target = document.querySelector(anchor.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        mobileMenu?.classList.add('hidden');
                    }
                });
            });
        
            // Form submission
            const contactForm = document.getElementById('contact-form');
            const formMessage = document.getElementById('form-message');
            contactForm?.addEventListener('submit', e => {
                e.preventDefault();
                setTimeout(() => {
                    formMessage?.classList.remove('hidden');
                    contactForm.reset();
                    setTimeout(() => formMessage?.classList.add('hidden'), 5000);
                }, 1000);
            });
        
            // Typing animation
            const typingText = document.querySelector('.typing-text');
            if (typingText) {
                const text = typingText.textContent;
                typingText.textContent = '';
                let i = 0;
                (function type() {
                    if (i < text.length) {
                        typingText.textContent += text[i++];
                        setTimeout(type, 100);
                    }
                })();
            }
        
            // Scrollspy for navigation
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            window.addEventListener('scroll', () => {
                let currentId = '';
                const scrollY = window.pageYOffset;
        
                sections.forEach(section => {
                    if (scrollY >= section.offsetTop - 100) {
                        currentId = section.id;
                    }
                });
        
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
                });
            });
        });
        
        // Toggle project details
        function toggleProjectDetails(id) {
            document.getElementById(id)?.classList.toggle('hidden');
            document.getElementById(`${id}-icon`)?.classList.toggle('rotate-180');
        }