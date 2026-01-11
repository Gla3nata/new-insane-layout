const portfolioSlider = () => {
    const isMobile = () => window.innerWidth < 575;

    const initDesktopSlider = () => {
        const slider = document.querySelector('.portfolio-slider');
        if (!slider) return;

        const slides = slider.querySelectorAll('.portfolio-slider__slide');
        const prev = document.getElementById('portfolio-arrow_left');
        const next = document.getElementById('portfolio-arrow_right');

        let currentIndex = 0;
        const slidesToShow = 3;

        const update = () => {
            slides.forEach((slide, i) => {
                slide.style.display =
                    i >= currentIndex && i < currentIndex + slidesToShow
                        ? 'flex'
                        : 'none';
            });

            prev.style.display = currentIndex === 0 ? 'none' : 'flex';
            next.style.display =
                currentIndex >= slides.length - slidesToShow
                    ? 'none'
                    : 'flex';
        };

        prev.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                update();
            }
        });

        next.addEventListener('click', () => {
            if (currentIndex < slides.length - slidesToShow) {
                currentIndex++;
                update();
            }
        });

        update();
    };
    const initMobileSlider = () => {
        const slider = document.querySelector('.portfolio-slider-mobile');
        if (!slider) return;

        const slides = slider.querySelectorAll('.portfolio-slider__slide-frame');
        const prev = document.getElementById('portfolio-arrow-mobile_left');
        const next = document.getElementById('portfolio-arrow-mobile_right');
        const counter = document.getElementById('portfolio-counter');

        let currentIndex = 0;

        const update = () => {
            slides.forEach((slide, i) => {
                slide.style.display = i === currentIndex ? 'flex' : 'none';
            });

            if (counter) {
                counter.textContent = `${currentIndex + 1} / ${slides.length}`;
            }

            // prev
            if (prev) {
                if (currentIndex === 0) {
                    prev.style.display = 'none';
                } else {
                    prev.style.display = 'flex';
                    prev.removeAttribute('disabled');
                    prev.style.zIndex = '10';
                }
            }

            // next
            if (next) {
                if (currentIndex === slides.length - 1) {
                    next.style.display = 'none';
                } else {
                    next.style.display = 'flex';
                    next.removeAttribute('disabled');
                    next.style.zIndex = '10';
                }
            }
        };

        next.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                update();
            }
        });

        prev.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                update();
            }
        });

        update();
    };
    const initPortfolioSlider = () => {
        if (isMobile()) {
            initMobileSlider();
        } else {
            initDesktopSlider();
        }
    };
    window.addEventListener('resize', initPortfolioSlider);
    initPortfolioSlider();

}

export default portfolioSlider;