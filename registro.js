document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');

    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;

        // Aqui você pode adicionar a lógica para enviar os dados do login ao servidor

        alert(`Usuario: ${username}\nContraseña: ${password}\nGuardar contraseña: ${remember}`);
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        // Aqui você pode adicionar a lógica para enviar os dados do registro ao servidor

        alert(`Nuevo Usuario: ${newUsername}\nNueva Contraseña: ${newPassword}`);
    });
});
