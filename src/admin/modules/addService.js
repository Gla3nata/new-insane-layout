import { ServiceApi } from "./serviceApi"

export const addService = () => {
    const openBtn = document.querySelector('.btn-addItem');
    const modal = document.getElementById('modal');

    if (!openBtn || !modal) return;

    const closeBtn = modal.querySelector('.button__close');
    const cancelBtn = modal.querySelector('.cancel-button');

    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

}

