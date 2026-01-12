const popupRepairTypes = () => {
    const nav = document.querySelector('.nav-list-popup-repair');
    const tableBody = document.querySelector('.popup-repair-types-content-table__list tbody');
    const prevArrow = document.getElementById('nav-arrow-popup-repair_left');
    const nextArrow = document.getElementById('nav-arrow-popup-repair_right');

    const isMobile = () => window.innerWidth < 1024;

    fetch('../db/db.json')
        .then(res => res.json())
        .then(data => {

            const types = [...new Set(data.map(item => item.type))];

            nav.innerHTML = types.map((type, i) => `
                <button class="button_o popup-repair-types-nav__item ${i === 0 ? 'active' : ''}">
                    ${type}
                </button>
            `).join('');

            const buttons = nav.querySelectorAll('.popup-repair-types-nav__item');

            const renderTable = (type) => {
                tableBody.innerHTML = '';

                const filtered = data.filter(item => item.type === type);

                if (!filtered.length) {
                    tableBody.innerHTML = `
                        <tr>
                            <td colspan="5">Нет данных</td>
                        </tr>
                    `;
                    return;
                }

                filtered.forEach(item => {
                    const row = document.createElement('tr');
                    row.className = 'mobile-row';

                    row.innerHTML = `
                        <td class="repair-types-name">${item.name}</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Ед. измерения</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                        <td class="repair-types-value">${item.units}</td>
                        <td class="repair-types-value">${item.cost} руб.</td>
                    `;

                    tableBody.appendChild(row);
                });
            };

            const switchTypeByIndex = (index) => {
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.display = '';
                });

                buttons[index].classList.add('active');

                if (isMobile()) {
                    buttons.forEach(btn => btn.style.display = 'none');
                    buttons[index].style.display = 'inline-block';
                }

                const type = buttons[index].textContent.trim();
                renderTable(type);
            };

            buttons.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    currentIndex = index;
                    switchTypeByIndex(index);
                });
            });

            let currentIndex = 0;

            if (nextArrow) {
                nextArrow.addEventListener('click', () => {
                    if (currentIndex < buttons.length - 1) {
                        currentIndex++;
                        switchTypeByIndex(currentIndex);
                    }
                });
            }

            if (prevArrow) {
                prevArrow.addEventListener('click', () => {
                    if (currentIndex > 0) {
                        currentIndex--;
                        switchTypeByIndex(currentIndex);
                    }
                });
            }

            switchTypeByIndex(0);
        });
};

export default popupRepairTypes;
