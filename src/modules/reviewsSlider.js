const reviewsSlider = () => {
    const slider = document.querySelector('.reviews-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.reviews-slider__slide');
    const prev = document.getElementById('reviews-arrow_left');
    const next = document.getElementById('reviews-arrow_right');

    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'flex' : 'none';
        });
    };

    showSlide(currentIndex);

    next.addEventListener('click', () => {
        currentIndex++;

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        showSlide(currentIndex);
    });

    prev.addEventListener('click', () => {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }

        showSlide(currentIndex);
    });
};

export default reviewsSlider;
