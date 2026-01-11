const portfolioSlider = () => {
    const slider = document.querySelector('.portfolio-slider');
    const slides = slider.querySelectorAll('.portfolio-slider__slide');
    const prev = document.getElementById('portfolio-arrow_left');
    const next = document.getElementById('portfolio-arrow_right');


    const slidesToShow = 3;
    let currentIndex = 0;
    const updateSlider = () => {
        slides.forEach((slide, index) => {
            slide.style.display = 'none';

            if (
                index >= currentIndex &&
                index < currentIndex + slidesToShow
            ) {
                slide.style.display = 'flex';
            }
        });

        // стрелки
        prev.style.display = currentIndex === 0 ? 'none' : 'flex';
        next.style.display =
            currentIndex >= slides.length - slidesToShow
                ? 'none'
                : 'flex';
    };

    // стрелки
    next.addEventListener('click', () => {
        if (currentIndex < slides.length - slidesToShow) {
            currentIndex++;
            updateSlider();
        }
    });

    prev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });


    updateSlider();
}

export default portfolioSlider;