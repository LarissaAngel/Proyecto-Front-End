const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_aw3g5os';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Enviado!');
            window.location.href = 'index.html'; // Redireciona para a página principal
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err)); // Corrige a referência ao erro
        });
});
