const menuPopup = () => {
    const popup = document.querySelector('.popup-menu');
    const menuTriggers = document.querySelectorAll('.menu__icon, .menu__title');
    const closeButton = popup?.querySelector('.close-menu');

    if (!popup || !menuTriggers.length) return;

    const togglePopup = () => {
        popup.classList.toggle('popup--active');
    };

    menuTriggers.forEach(trigger => {
        trigger.addEventListener('click', togglePopup);
    });

    if (closeButton) {
        closeButton.addEventListener('click', togglePopup);
    }
};

export default menuPopup;