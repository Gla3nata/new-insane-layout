const transparencySlider = () => {
    const slider = document.querySelector('.transparency-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.transparency-item');
    const prev = document.getElementById('transparency-arrow_left');
    const next = document.getElementById('transparency-arrow_right');

    let currentIndex = 0;

    const isMobile = () => window.innerWidth < 1090;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    };

    const init = () => {
        if (!isMobile()) {
            slides.forEach(slide => slide.style.display = '');
            return;
        }

        showSlide(currentIndex);
    };

    next.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
        }
    });

    prev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
        }
    });

    window.addEventListener('resize', init);
    init();
};

export default transparencySlider;
