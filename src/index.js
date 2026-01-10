import phoneToggle from './modules/phoneToggle.js';
import smoothScroll from './modules/smoothScroll.js';
import repairPopup from './modules/repairPopup.js';
import faq from './modules/faq.js';
import phoneMask from './modules/phoneMask.js';
import modalController from './modules/modalController.js';
import sendForm from './modules/sendForm.js';
import tooltip from './modules/tooltip.js';
import formulaSlider from './modules/formulaSlider.js';
import repairTypes from './modules/repairTypes.js';

repairPopup()
phoneToggle()
smoothScroll()
faq()
phoneMask()
tooltip()
formulaSlider()
repairTypes()

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