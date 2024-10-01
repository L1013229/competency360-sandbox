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

    // Interactive Report Tooltips
    const reportImage = document.querySelector('.report-image');
    if (reportImage) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        reportImage.appendChild(tooltip);

        reportImage.addEventListener('mousemove', function(e) {
            if (e.target.tagName === 'AREA') {
                const tooltipText = e.target.getAttribute('data-tooltip');
                tooltip.textContent = tooltipText;
                tooltip.style.display = 'block';
                tooltip.style.left = e.pageX + 'px';
                tooltip.style.top = e.pageY + 'px';
            } else {
                tooltip.style.display = 'none';
            }
        });

        reportImage.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    }
});
