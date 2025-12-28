const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    const popupMenu = document.querySelector('.popup-menu');

    if (!links.length) return;

    links.forEach(link => {
        link.addEventListener('click', event => {
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (popupMenu && popupMenu.classList.contains('popup--active')) {
                popupMenu.classList.remove('popup--active');
            }
            const startPosition = window.pageYOffset;
            const targetPosition = targetElement.getBoundingClientRect().top;
            let startTime = null;
            const animation = currentTime => {
                if (startTime === null) startTime = currentTime;

                const timeElapsed = currentTime - startTime;
                const run = ease(
                    timeElapsed,
                    startPosition,
                    targetPosition,
                    800
                );

                window.scrollTo(0, run);

                if (timeElapsed < 800) {
                    requestAnimationFrame(animation);
                }
            };
            const ease = (t, b, c, d) => {
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t + b;
                t--;
                return (-c / 2) * (t * (t - 2) - 1) + b;
            };
            requestAnimationFrame(animation);
        })
    })
};

export default smoothScroll;