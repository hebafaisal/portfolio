document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projectContainer');
    const scrollAmount = 320; // Approximately one card width + gap

    document.getElementById('scrollLeft').addEventListener('click', () => {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    document.getElementById('scrollRight').addEventListener('click', () => {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Hide scroll buttons when at the start/end
    container.addEventListener('scroll', () => {
        const scrollLeft = document.getElementById('scrollLeft');
        const scrollRight = document.getElementById('scrollRight');

        // Hide left button at start
        scrollLeft.style.opacity = container.scrollLeft <= 0 ? '0.5' : '1';
        scrollLeft.style.cursor = container.scrollLeft <= 0 ? 'default' : 'pointer';

        // Hide right button at end
        const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
        scrollRight.style.opacity = isAtEnd ? '0.5' : '1';
        scrollRight.style.cursor = isAtEnd ? 'default' : 'pointer';
    });

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) { // Minimum swipe distance
            container.scrollBy({
                left: diff > 0 ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    });
});