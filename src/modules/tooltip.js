const tooltip = () => {
    const formulaItems = document.querySelectorAll('.formula-item');

    if (!formulaItems.length) return;
    formulaItems.forEach(item => {
        const tooltip = item.querySelector('.formula-item-popup');

        if (!tooltip) return;

        item.addEventListener('mouseenter', (event) => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';

            checkPosition(tooltip, item);
        });
        // при уходе мышки
        item.addEventListener('mouseleave', () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
            tooltip.style.top = '';
            tooltip.style.bottom = '';
        });
    });

    function checkPosition(tooltip, item) {
        const tooltipRect = tooltip.getBoundingClientRect();

        // если подсказка выходит за верх экрана
        if (tooltipRect.top < 0) {
            tooltip.style.top = '100%';
            tooltip.style.bottom = 'auto';
        } else {
            tooltip.style.bottom = '100%';
            tooltip.style.top = 'auto';
        }
    }
};
export default tooltip;