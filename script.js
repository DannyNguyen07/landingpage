document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formMessage = document.getElementById('form-message');

    const jsonData = {};
    formData.forEach((value, key) => jsonData[key] = value);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        });

        const data = await response.json();

        if (response.ok) {
            formMessage.style.display = 'block';
            formMessage.textContent = 'Message sent successfully!';
            formMessage.style.color = 'green';
            form.reset();
        } else {
            formMessage.style.display = 'block';
            formMessage.textContent = 'There was a problem sending the message: ' + data.message;
            formMessage.style.color = 'red';
        }
    } catch (error) {
        formMessage.style.display = 'block';
        formMessage.textContent = 'There was a problem sending the message: ' + error.message;
        formMessage.style.color = 'red';
    }
});

