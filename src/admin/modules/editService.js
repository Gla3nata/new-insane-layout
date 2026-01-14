import { renderTable } from "./renderTable";

export const editService = (api) => {
    const tbody = document.getElementById('tbody');
    const modal = document.getElementById('modal');
    if (!tbody || !modal) return;

    const form = modal.querySelector('form');
    const title = modal.querySelector('.modal__header');

    const typeInput = form.querySelector('#type');
    const nameInput = form.querySelector('#name');
    const unitsInput = form.querySelector('#units');
    const costInput = form.querySelector('#cost');

    const closeBtn = modal.querySelector('.button__close');
    const cancelBtn = modal.querySelector('.cancel-button');

    let editingId = null;

    const openModal = () => modal.style.display = 'flex';
    const closeModal = () => {
        modal.style.display = 'none';
        form.reset();
        editingId = null;
    };

    // закрытие
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    tbody.addEventListener('click', (e) => {
        const btn = e.target.closest('.action-change');
        if (!btn) return;

        const tr = btn.closest('tr');
        editingId = tr.dataset.key;

        api.getById(editingId).then(service => {
            title.textContent = 'Изменение услуги';

            typeInput.value = service.type;
            nameInput.value = service.name;
            unitsInput.value = service.units;
            costInput.value = service.cost;

            openModal();
        });
    });

    form.addEventListener('submit', (e) => {
    e.preventDefault();

    const service = {
        type: typeInput.value.trim(),
        name: nameInput.value.trim(),
        units: unitsInput.value.trim(),
        cost: Number(costInput.value)
    };

    const request = editingId
        ? api.updateService(editingId, service)
        : api.addService(service);

    request
        .then(() => api.getAll())
        .then(services => {
            renderTable(services);
            closeModal();
        });
});

};
