document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formMessage = document.getElementById('form-message');

    fetch(form.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            formMessage.style.display = 'block';
            formMessage.textContent = 'Message sent successfully!';
            formMessage.style.color = 'green';
            form.reset();
        } else {
            formMessage.style.display = 'block';
            formMessage.textContent = 'There was a problem sending the message.';
            formMessage.style.color = 'red';
        }
    })
    .catch(error => {
        formMessage.style.display = 'block';
        formMessage.textContent = 'There was a problem sending the message.';
        formMessage.style.color = 'red';
    });
});