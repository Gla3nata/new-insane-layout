export const filterService = (services, renderTable) => {
    const select = document.getElementById('typeItem');
    if (!select) return;

    const types = [...new Set(services.map(s => s.type))];
    
    types.forEach(type => {
        select.insertAdjacentHTML(
            'beforeend',
            `<option value="${type}">${type}</option>`
        );
    });

    select.addEventListener('change', () => {
        if (select.value === 'all') {
            renderTable(services);
        } else {
            renderTable(
                services.filter(s => s.type === select.value)
            );
        }
    });
};
