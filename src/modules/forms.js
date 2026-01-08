const forms = () => {
    const allForms = document.querySelectorAll('form'); 
    allForms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            
            const checkbox = form.querySelector('input[type="checkbox"]');
            if (checkbox && !checkbox.checked) {
                alert('Необходимо согласие с условиями!');
                checkbox.focus();
                return;
            }

        });
    });
};

export default forms;