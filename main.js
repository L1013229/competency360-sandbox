document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', function() {
        const layers = document.querySelectorAll('.parallax-layer');
        const scrollPosition = window.pageYOffset;

        layers.forEach((layer, index) => {
            const depth = (index + 1) * 0.3;
            const movement = -(scrollPosition * depth);
            layer.style.transform = `translateY(${movement}px)`;
        });
    });

    // Carousel Functionality for Sample Report
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(carouselTrack.children);
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentSlideIndex = 0;

    function updateSlidePosition() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        carouselTrack.style.transform = 'translateX(' + (-slideWidth * currentSlideIndex) + 'px)';
    }

    nextButton.addEventListener('click', () => {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
            updateSlidePosition();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateSlidePosition();
        }
    });
});
