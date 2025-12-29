const faq = () => {
    const faqContainer = document.querySelector('#faq');
   if (!faqContainer) return;
   const titleBlocks = faqContainer.querySelectorAll('.title_block');
    titleBlocks.forEach(title => {
        title.addEventListener('click', () => {
            const parentLi = title.closest('li');
            if (!parentLi) return;

            const msgContent = parentLi.querySelector('.msg');
            if (!msgContent) return;
            
            titleBlocks.forEach(otherTitle => {
                if (otherTitle !== title) {
                    const otherLi = otherTitle.closest('li');
                    const otherMsg = otherLi.querySelector('.msg');
                    otherMsg.classList.remove('--active');
                    otherTitle.classList.remove('msg-active');
                }
            });
            
            msgContent.classList.toggle('--active');
            title.classList.toggle('msg-active');
        });
    });
};

export default faq;