import { renderTable } from "./renderTable"
import { ServiceApi } from "./serviceApi"

export const addService = () => {
    const openBtn = document.querySelector('.btn-addItem');
    const modal = document.getElementById('modal');
    const form = document.querySelector('form')
    const typeInput = form.querySelector('#type')
    const nameInput = form.querySelector('#name')
    const unitsInput = form.querySelector('#units')
    const costInput = form.querySelector('#cost')

    if (!openBtn || !modal) return;

    const closeBtn = modal.querySelector('.button__close');
    const cancelBtn = modal.querySelector('.cancel-button');

    const api = new ServiceApi();

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

   form.addEventListener('submit', (e) => {
        e.preventDefault();

        const service = {
            type: typeInput.value.trim(),
            name: nameInput.value.trim(),
            units: unitsInput.value.trim(),
            cost: costInput.value.trim(),
        };

        api.addService(service)
            .then(() => api.getAll())
            .then(services => {
                renderTable(services);
                modal.style.display = 'none';
                form.reset();
            })
            .catch(error => {
                console.error('Ошибка при добавлении услуги:', error);
                alert('Ошибка при добавлении услуги');
            });
    });

}

