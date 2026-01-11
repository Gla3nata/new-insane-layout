const popupTransparencySlider = () => {
    const popup = document.querySelector('.popup-transparency');
    if (!popup) return;
    const slider = popup.querySelector('.popup-transparency-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.popup-transparency-slider__slide');
    const prev = popup.querySelector('#transparency_left');
    const next = popup.querySelector('#transparency_right');
    const current = popup.querySelector('.slider-counter-content__current');
    const total = popup.querySelector('.slider-counter-content__total');

    let currentIndex = 0;

    total.textContent = slides.length;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        current.textContent = index + 1;
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

}

export default popupTransparencySlider;