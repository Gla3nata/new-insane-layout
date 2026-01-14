import { renderTable } from "./renderTable";

export const removeService = (api) => {
    const tbody = document.getElementById('tbody');
    if (!tbody) return;

    tbody.addEventListener('click', (event) => {
        const btn = event.target.closest('.action-remove');
        if (!btn) return;

        const tr = btn.closest('tr');
        const id = tr.dataset.key;

        api.removeService(id)
            .then(() => api.getAll())
            .then(services => renderTable(services));
    });
};
