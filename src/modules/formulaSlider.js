const formulaSlider = () => {
    const slider = document.querySelector('.formula-slider');
    const items = slider.querySelectorAll('.formula-item');
    const prev = document.getElementById('formula-arrow_left');
    const next = document.getElementById('formula-arrow_right');

    let currentIndex = 0;

    const setActiveItem = (index) => {
        items.forEach(item => item.classList.remove('active-item'));
        items[index].classList.add('active-item');
         moveSlider();
    };

    const isMobile = () => window.innerWidth < 576;

    const init = () => {
        if (!isMobile()) return;
        setActiveItem(currentIndex);
    };
    const moveSlider = () => {
    const slideWidth = items[0].offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

    next.addEventListener('click', () => {
        if (!isMobile()) return;
        currentIndex = (currentIndex + 1) % items.length;
        setActiveItem(currentIndex);
    });

    prev.addEventListener('click', () => {
        if (!isMobile()) return;
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        setActiveItem(currentIndex);
    });

    window.addEventListener('resize', init);
    init();
};

export default formulaSlider;
