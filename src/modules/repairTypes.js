const repairTypes = () => {
    // Находим элементы
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
    navNextArrow.addEventListener('click', () => {
        if (!isMobile()) return;
        currentIndex = (currentIndex + 1) % navButtons.length;
        setActiveItem(currentIndex);
    });

    navPrevArrow.addEventListener('click', () => {
        if (!isMobile()) return;
        currentIndex = (currentIndex - 1 + navButtons.length) % navButtons.length;
        setActiveItem(currentIndex);
    });


    const getSlidesCount = () => {
        const currentType = allTypes[currentTypeIndex];
        return currentType.querySelectorAll('.repair-types-slider__slide').length;
    };

    // Функция скрытия всех типов
    const hideAllTypes = () => {
        allTypes.forEach(type => {
            type.style.display = 'none';
        });
    };

    // Функция показа нужного типа
    const showType = (typeIndex) => {
        hideAllTypes();

        if (allTypes[typeIndex]) {
            allTypes[typeIndex].style.display = 'block';
        }
    };

    // Функция обновления активной кнопки
    const updateActiveButton = (index) => {
        navButtons.forEach(button => button.classList.remove('active'));
        navButtons[index].classList.add('active');
    };

    // Функция обновления счетчика
    const updateCounter = () => {
        if (!currentCounter || !totalCounter) return;

        const slidesCount = getSlidesCount();
        currentCounter.textContent = currentSlideIndex + 1;
        totalCounter.textContent = slidesCount;
    };

    // Функция показа нужного слайда
    const showSlide = (slideIndex) => {
        const currentType = allTypes[currentTypeIndex];
        const allSlides = currentType.querySelectorAll('.repair-types-slider__slide');
        const slidesCount = getSlidesCount();

        // Проверяем границы
        if (slideIndex < 0) slideIndex = slidesCount - 1;
        if (slideIndex >= slidesCount) slideIndex = 0;

        // Скрываем все слайды
        allSlides.forEach(slide => {
            slide.style.display = 'none';
            slide.style.opacity = '0';
        });

        // Показываем нужный слайд
        if (allSlides[slideIndex]) {
            allSlides[slideIndex].style.display = 'block';
            setTimeout(() => {
                allSlides[slideIndex].style.opacity = '1';
            }, 10);
        }

        // Обновляем состояние
        currentSlideIndex = slideIndex;
        updateCounter();
    };

    // Функция следующего слайда
    const nextSlide = () => {
        const slidesCount = getSlidesCount();
        let nextIndex = currentSlideIndex + 1;

        if (nextIndex >= slidesCount) {
            nextIndex = 0;
        }

        showSlide(nextIndex);
    };

    // Функция предыдущего слайда
    const prevSlide = () => {
        const slidesCount = getSlidesCount();
        let prevIndex = currentSlideIndex - 1;

        if (prevIndex < 0) {
            prevIndex = slidesCount - 1;
        }

        showSlide(prevIndex);
    };

    const init = () => {

        showType(0);
        updateActiveButton(0);
        showSlide(0);
        if (prevArrow) {
            prevArrow.addEventListener('click', prevSlide);
        }
        if (nextArrow) {
            nextArrow.addEventListener('click', nextSlide);
        }
    };

    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentTypeIndex = index;
            currentSlideIndex = 0;

            showType(index);
            updateActiveButton(index);
            showSlide(0);
        });
    });

    init();
    initMobile();
};

export default repairTypes;


// Каждый слайдер имеет динамический счетчик слайдов 
// переключение активного слова не переключает слайдер с картинкой