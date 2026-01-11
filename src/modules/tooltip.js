const tooltip = () => {
    const formulaItems = document.querySelectorAll('.formula-item');

    const isDesktop = () => window.innerWidth >= 1024;

    if (!formulaItems.length) return;
    formulaItems.forEach(item => {
        const tooltip = item.querySelector('.formula-item-popup');

        if (!tooltip) return;

        item.addEventListener('mouseenter', () => {
            if (!isDesktop()) return;

            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';

            checkPosition(tooltip, item);
        });
        // при уходе мышки
        item.addEventListener('mouseleave', () => {
            if (!isDesktop()) return;

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
            tooltip.classList.add('formula-item-popup--bottom');
        } else {
            tooltip.style.bottom = '100%';
            tooltip.style.top = 'auto';
            tooltip.classList.remove('formula-item-popup--bottom');
        }
    }
};
export default tooltip;