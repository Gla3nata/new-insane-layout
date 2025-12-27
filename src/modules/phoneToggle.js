const phoneToggle = () => {
    const arrow = document.querySelector('.header-contacts__arrow');
    const secondPhoneBlock = document.querySelector('.header-contacts__phone-number-accord');

    if (!arrow || !secondPhoneBlock) return;

    arrow.addEventListener('click', () => {
        secondPhoneBlock.classList.toggle(
            'header-contacts__phone-number-accord--active'
        );

        arrow.classList.toggle('header-contacts__arrow--active');
    });
};

export default phoneToggle;
