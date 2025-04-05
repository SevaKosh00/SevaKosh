// About Us Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.getElementById('menu-button');
    const expandedMenu = document.getElementById('expanded-menu');
    
    if (menuButton && expandedMenu) {
        menuButton.addEventListener('click', function() {
            expandedMenu.style.display = expandedMenu.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation for value cards on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.value-card').forEach(card => {
        observer.observe(card);
    });
});