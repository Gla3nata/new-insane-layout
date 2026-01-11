const formulaSlider = () => {
    const slider = document.querySelector('.formula-slider');
    const items = slider.querySelectorAll('.formula-item');
    const prevBtn  = document.getElementById('formula-arrow_left');
    const nextBtn  = document.getElementById('formula-arrow_right');

    let currentIndex = 0;

    const isMobile = () => window.innerWidth < 1024;
    // const moveSlider = () => {
    //     const slideWidth = items[0].offsetWidth;
    //     const wrap = slider.parentElement;
    //     const wrapWidth = wrap.offsetWidth;

    //     const offset =
    //         currentIndex * slideWidth -
    //         wrapWidth / 2 +
    //         slideWidth / 2;

    //     slider.style.transform = `translateX(-${offset}px)`;
    // };
    const updateSlides = () => {
        if (!isMobile()) return;

        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        const nextIndex = (currentIndex + 1) % items.length;

        items.forEach((item, index) => {
            item.classList.remove('active-item');
            item.style.display = 'none';
            item.style.order = '';

            if (index === prevIndex) {
                item.style.display = 'flex';
                item.style.order = 0;
            }

            if (index === currentIndex) {
                item.style.display = 'flex';
                item.style.order = 1;
                item.classList.add('active-item');
            }

            if (index === nextIndex) {
                item.style.display = 'flex';
                item.style.order = 2;
            }
        });
    };

    nextBtn.addEventListener('click', () => {
        if (!isMobile()) return;
        currentIndex = (currentIndex + 1) % items.length;
        updateSlides();
    });

    prevBtn.addEventListener('click', () => {
        if (!isMobile()) return;
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateSlides();
    });

    window.addEventListener('resize', updateSlides);
    updateSlides();
};

export default formulaSlider;
