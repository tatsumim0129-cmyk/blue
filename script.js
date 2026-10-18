// Transform-based Scroll Parallax Implementation
document.addEventListener('scroll', () => {
    // Check if user prefers reduced motion to honor accessibility constraints
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const scrolled = window.pageYOffset;
    const layers = document.querySelectorAll('.parallax-layer');

    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        // Smoothly adjust transform offset based on depth speed setting
        const yPos = -(scrolled * speed);
        layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
    });
});
