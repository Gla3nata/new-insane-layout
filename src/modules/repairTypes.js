const repairTypes = () => {
    const navButtons = document.querySelectorAll('.repair-types-nav__item');
    const allTypes = document.querySelectorAll('.types-repair1, .types-repair2, .types-repair3, .types-repair4, .types-repair5');
    const currentCounter = document.querySelector('.slider-counter-content__current');
    const totalCounter = document.querySelector('.slider-counter-content__total');
    const prevArrow = document.getElementById('repair-types-arrow_left');
    const nextArrow = document.getElementById('repair-types-arrow_right');

    const navPrevArrow = document.getElementById('nav-arrow-repair-left_base');
    const navNextArrow = document.getElementById('nav-arrow-repair-right_base');
    const navContainer = document.querySelector('.nav-list-repair');

    let currentIndex = 0;
    const setActiveItem = (index) => {
        navButtons.forEach(item => item.classList.remove('active'));
        navButtons[index].classList.add('active');
        moveNavContainer();
    };

    if (!navButtons.length || !allTypes.length) return;

    let currentTypeIndex = 0;
    let currentSlideIndex = 0;

    const isMobile = () => window.innerWidth < 576;

    const initMobile = () => {
        if (!isMobile()) return;
        setActiveItem(currentIndex);
    };
    const moveNavContainer = () => {
        const slideWidth = navButtons[0].offsetWidth;
        navContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    const switchType = (index) => {
        currentIndex = index;
        currentTypeIndex = index;
        currentSlideIndex = 0;

        showType(index);
        updateActiveButton(index);
        showSlide(0);
    };

    navNextArrow.addEventListener('click', () => {
        if (!isMobile()) return;

        currentIndex = (currentIndex + 1) % navButtons.length;
        switchType(currentIndex);
        moveNavContainer();
    });

    navPrevArrow.addEventListener('click', () => {
        if (!isMobile()) return;

        currentIndex = (currentIndex - 1 + navButtons.length) % navButtons.length;
        switchType(currentIndex);
        moveNavContainer();
    });

    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            switchType(index);
        });
    });


    const getSlidesCount = () => {
        const currentType = allTypes[currentTypeIndex];
        return currentType.querySelectorAll('.repair-types-slider__slide').length;
    };

    const hideAllTypes = () => {
        allTypes.forEach(type => {
            type.style.display = 'none';
        });
    };

    const showType = (typeIndex) => {
        hideAllTypes();

        if (allTypes[typeIndex]) {
            allTypes[typeIndex].style.display = 'block';
        }
    };

    const updateActiveButton = (index) => {
        navButtons.forEach(btn => btn.classList.remove('active'));
        navButtons[index].classList.add('active');
    };

    const updateCounter = () => {
        if (!currentCounter || !totalCounter) return;

        const slidesCount = getSlidesCount();
        currentCounter.textContent = currentSlideIndex + 1;
        totalCounter.textContent = slidesCount;
    };

    const showSlide = (slideIndex) => {
        const currentType = allTypes[currentTypeIndex];
        const allSlides = currentType.querySelectorAll('.repair-types-slider__slide');
        const slidesCount = getSlidesCount();

        if (slideIndex < 0) slideIndex = slidesCount - 1;
        if (slideIndex >= slidesCount) slideIndex = 0;

        allSlides.forEach(slide => {
            slide.style.display = 'none';
            slide.style.opacity = '0';
        });

        if (allSlides[slideIndex]) {
            allSlides[slideIndex].style.display = 'block';
            setTimeout(() => {
                allSlides[slideIndex].style.opacity = '1';
            }, 10);
        }

        currentSlideIndex = slideIndex;
        updateCounter();
    };

    const nextSlide = () => {
        const slidesCount = getSlidesCount();
        let nextIndex = currentSlideIndex + 1;

        if (nextIndex >= slidesCount) {
            nextIndex = 0;
        }

        showSlide(nextIndex);
    };

    const prevSlide = () => {
        const slidesCount = getSlidesCount();
        let prevIndex = currentSlideIndex - 1;

        if (prevIndex < 0) {
            prevIndex = slidesCount - 1;
        }

        showSlide(prevIndex);
    };

    const init = () => {
        switchType(0);

        if (prevArrow) prevArrow.addEventListener('click', prevSlide);
        if (nextArrow) nextArrow.addEventListener('click', nextSlide);
    };

    init();
    initMobile();

};

export default repairTypes;
