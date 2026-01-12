import phoneToggle from './modules/phoneToggle.js';
import smoothScroll from './modules/smoothScroll.js';
import faq from './modules/faq.js';
import phoneMask from './modules/phoneMask.js';
import modalController from './modules/modalController.js';
import sendForm from './modules/sendForm.js';
import tooltip from './modules/tooltip.js';
import repairTypes from './modules/repairTypes.js';
import formulaSlider from './modules/formulaSlider.js';
import portfolioSlider from './modules/portfolioSlider.js';
import transparencySlider from './modules/transparencySlider.js';
import reviewsSlider from './modules/reviewsSlider'


phoneToggle()
smoothScroll()
faq()
phoneMask()
tooltip()
repairTypes()
formulaSlider()
portfolioSlider()
transparencySlider()
reviewsSlider();
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