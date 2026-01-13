import adminTable from '../admin/admin-table';

const auth = () => {
    const form = document.querySelector('form');
    const loginInput = document.getElementById('name');
    const passwordInput = document.getElementById('type');
    const warnings = document.querySelectorAll('.text-warning');

    const hideWarnings = () => {
        warnings.forEach(w => w.style.display = 'none');
    };

    hideWarnings();

    const checkAuth = () => {
        const isAuth = document.cookie.includes('auth=true');
        const path = window.location.pathname;

        const isLoginPage = path.includes('/admin/index.html');
        const isTablePage = path.includes('/admin/table.html');

        if (!isAuth && isTablePage) {
            window.location.href = 'index.html';
        }

        if (isAuth && isLoginPage) {
            window.location.href = 'table.html';
        }
         if (isAuth && isTablePage) {
            adminTable();
        }
    };

    checkAuth();

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        hideWarnings();

        const login = loginInput.value.trim();
        const password = passwordInput.value.trim();

        if (!login || !password) {
            warnings.forEach(w => w.style.display = 'block');
            loginInput.value = '';
            passwordInput.value = '';
            return;
        }

        fetch(`http://localhost:4545/users?login=${login}&password=${password}`)
            .then(res => res.json())
            .then(data => {
                if (!data.length) {
                    warnings.forEach(w => w.style.display = 'block');
                    loginInput.value = '';
                    passwordInput.value = '';
                } else {
                    document.cookie = 'auth=true; path=/';
                    window.location.href = 'table.html';
                }
            })
            .catch(() => {
                console.error('Ошибка сервера');
            });
    });
};

auth();
