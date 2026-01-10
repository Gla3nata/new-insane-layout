const modal = () => {
    const modals = document.querySelectorAll('.popup');
    
    const openModal = (selector) => {
        modals.forEach(popup => popup.classList.remove('popup--active'));

        const modal = document.querySelector(selector);
        if (modal) {
            modal.classList.add('popup--active');
        }
    };

    const closeModal = () => {
        modals.forEach(popup => popup.classList.remove('popup--active'));
    };

    document.addEventListener('click', (e) => {
        const target = e.target;

        // меню
        if (target.closest('.menu__icon') || target.closest('.menu__title')) {
            openModal('.popup-menu');
        }

        // zoom (портфолио)
        if (target.closest('.portfolio-slider__slide-frame')) {
            openModal('.popup-portfolio');
        }


        // договор
        if (target.closest('.transparency-item')) {
            openModal('.popup-transparency');
        }

        // консультация
        if (target.closest('.button_wide')) {
            openModal('.popup-consultation');
        }

        // политика
        if (target.closest('.link-privacy')) {
            openModal('.popup-privacy');
        }

        // закрытие
        if (target.closest('.close') || target.classList.contains('popup')) {
            closeModal();
        }
    });

    return {
        openModal,
        closeModal
    };
};

export default modal;
