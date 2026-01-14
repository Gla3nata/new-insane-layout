export const renderTable = (services) => {
    const tBody = document.getElementById('tbody');
 if (!tBody) return;

    tBody.innerHTML = '';

    services.forEach(service => {
        tBody.insertAdjacentHTML('beforeend', `
			<tr data-key="${service.id}" class="table__row">
                        <td class="table__id table__cell">${service.id}</td>
						<td class="table-type table__cell">${service.type}</td>
						<td class="table-name table__cell">${service.name}</td>
						<td class="table-units table__cell">${service.units}</td>
						<td class="table-cost table__cell">${service.cost} руб</td>
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
						</tr>
        `);
    });
};
