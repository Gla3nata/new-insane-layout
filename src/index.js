
import modal from './modules/modal.js';
import phoneToggle from './modules/phoneToggle.js';
import smoothScroll from './modules/smoothScroll.js';
import repairPopup from './modules/repairPopup.js';
import faq from './modules/faq.js';
import phoneMask from './modules/phoneMask.js';
import sendForm from './modules/sendForm.js';



repairPopup()
phoneToggle()
smoothScroll()
faq()
phoneMask()
sendForm({
    formId: 'feedback1', 
    });
sendForm({
    formId: 'feedback2'
});

sendForm({
    formId: 'feedback3'
});
sendForm({
    formId: 'feedback4'
});
sendForm({
    formId: 'feedback5'
});
sendForm({
    formId: 'feedback6'
});
modal()