const phoneMask = () => {
    const inputs = document.querySelectorAll('input[name="phone"]');
    if (!inputs.length) return;

    const setCursorPosition = (pos, elem) => {
        elem.focus();
        elem.setSelectionRange(pos, pos);
    };

    const createMask = event => {
        const input = event.target;
        const matrix = '+7 (___) ___-__-__';
        let i = 0;

        const def = matrix.replace(/\D/g, '');
        let val = input.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        input.value = matrix.replace(/./g, char => {
            if (/[_\d]/.test(char) && i < val.length) {
                return val.charAt(i++);
            }
            return i >= val.length ? '' : char;
        });

        if (event.type === 'blur' && input.value.length < 18) {
            input.value = '';
        } else {
            setCursorPosition(input.value.length, input);
        }
    };

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('blur', createMask);
    });
};

export default phoneMask;
