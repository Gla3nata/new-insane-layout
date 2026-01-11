const popupPortfolioSlider = () => {
    const slider = document.querySelector('.popup-portfolio-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.popup-portfolio-slider__slide');
    const prev = document.getElementById('popup_portfolio_left');
    const next = document.getElementById('popup_portfolio_right');

    const current = document.querySelector('#popup-portfolio-counter .slider-counter-content__current');
    const total = document.querySelector('#popup-portfolio-counter .slider-counter-content__total');

    let currentIndex = 0;

    total.textContent = slides.length;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });

        current.textContent = index + 1;

        // скрываем стрелки по краям
        prev.style.display = index === 0 ? 'none' : 'block';
        next.style.display = index === slides.length - 1 ? 'none' : 'block';
    };

    showSlide(currentIndex);

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
};

export default popupPortfolioSlider;
