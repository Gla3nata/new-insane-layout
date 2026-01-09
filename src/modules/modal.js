const modal = () => {
    const modals = document.querySelectorAll('.popup');

    const openModal = (selector) => {
        modals.forEach(popup => popup.classList.remove('popup--active'));
        const current = document.querySelector(selector);
        if (current) {
            current.classList.add('popup--active');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = () => {
        modals.forEach(popup => popup.classList.remove('popup--active'));
        document.body.style.overflow = '';
    };

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup') || e.target.closest('.close')) {
            closeModal();
        }
    });

    return {
        openModal,
        closeModal
    };
};

export default modal;
