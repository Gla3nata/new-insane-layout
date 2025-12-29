const repairPopup = () => {
    const popupRepair = document.querySelector('.popup-repair-types');
    const popupMenu = document.querySelector('.popup-menu');
    const repairLinks = document.querySelectorAll('.link-list-menu a, .link-list-repair a');
    const closeButtons = popupRepair?.querySelectorAll('.close');
    
    if (!popupRepair || !repairLinks.length) return;

    const openPopup = event => {
        event.preventDefault();

        if (popupMenu) {
            popupMenu.classList.remove('popup--active');
        }

        popupRepair.classList.add('popup--active');
    };

    repairLinks.forEach(link => {
        link.addEventListener('click', openPopup);
    });

    if (closeButtons) {
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                popupRepair.classList.remove('popup--active');
            });
        });
    }

    popupRepair.addEventListener('click', event => {
        if (event.target === popupRepair) {
            popupRepair.classList.remove('popup--active');
        }
    });
};
    
export default repairPopup;