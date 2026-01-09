const sendForm = ({ formId }) => {
    const form = document.getElementById(formId)
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const checkbox = form.querySelector('input[type="checkbox"]');
        if (checkbox && !checkbox.checked) {
            alert('Необходимо согласие с условиями!');
            checkbox.focus();
            return;
        }
        console.log('submit')

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.formId = formId;

        console.log('Данные для отправки:', data);

       try {
            // 3. Отправка данных
            const response = await fetch('server.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            console.log('Ответ сервера:', result);
            alert('Форма отправлена!');
            
        } catch (error) {
            console.error('Ошибка:', error);
            // Если server.php не работает, показываем тестовое сообщение
            alert('Форма отправлена (тестовый режим)');
        }
        
        // 4. Очищаем форму
        form.reset();
    });




};

export default sendForm;