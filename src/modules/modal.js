const modal = () => {
    const modals = document.querySelectorAll('.popup');

    const openModal = (modalClass) => {
        modals.forEach(modal => modal.classList.remove('popup--active'));

        const currentModal = document.querySelector(modalClass);
        if (currentModal) {
            currentModal.classList.add('popup--active');
            body.style.overflow = 'hidden';
        }
    };

    const closeModal = () => {
        modals.forEach(modal => modal.classList.remove('popup--active'));
    };

    document.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.menu__icon') || target.closest('.menu__title')) {
            openModal('.popup-menu');
        }

        if (target.closest('.link-privacy')) {
            openModal('.popup-privacy');
        }

        if (target.closest('.close')) {
            closeModal();
        }

        if (target.classList.contains('popup')) {
            closeModal();
        }
    });
};

export default modal;
