const adminTable = () => {
    const tableBody = document.getElementById('tbody');
    const select = document.getElementById('typeItem');

    let services = [];

    fetch('http://localhost:4545/services')
        .then(res => res.json())
        .then(data => {
            services = data;

            renderTable(services);
            renderSelect(services);
        });

    const renderTable = (data) => {
        tableBody.innerHTML = '';

        data.forEach(item => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td class="table__id table__cell">${item.id}</td>
						<td class="table-type table__cell">${item.type}</td>
						<td class="table-name table__cell">${item.name}</td>
						<td class="table-units table__cell">${item.units}</td>
						<td class="table-cost table__cell">${item.cost} руб</td>
						<td>
							<div class="table__actions table__cell">
								<button class="button action-change">
                                <span class="svg_ui">
                                <svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
								</button>
								<button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
								</button>
							</div>
						</td>
            `;

            tableBody.appendChild(row);
        });
    };

    const renderSelect = (data) => {
        const types = [...new Set(data.map(item => item.type))];

        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            select.appendChild(option);
        });
    };

    select.addEventListener('change', () => {
        const value = select.value;

        if (value === 'all') {
            renderTable(services);
        } else {
            const filtered = services.filter(item => item.type === value);
            renderTable(filtered);
        }
    });
};

export default adminTable;
