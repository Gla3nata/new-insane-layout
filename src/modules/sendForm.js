import modalController from './modalController';

console.log(modalController);

const sendForm = ({ formId }) => {
    const form = document.getElementById(formId);
    
    
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const checkbox = form.querySelector('input[type="checkbox"]');
        if (checkbox) {
            if (checkbox.hasAttribute('required') && !checkbox.checked) {
                alert('Необходимо согласие с условиями!');
                return;
            }

            if (!checkbox.checked) {
                alert('Необходимо согласие с условиями!');
                return;
            }
        }

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.formId = formId;

        try {
            await fetch('server.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            modalController.openModal('.popup-thank');
            console.log('modalController');
            
            form.reset();

        } catch {
            alert('Ошибка отправки формы');
        }
    });

   
};

export default sendForm;
