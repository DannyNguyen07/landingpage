document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const jsonData = {};

        formData.forEach((value, key) => jsonData[key] = value);

        fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data); 
            const formMessage = document.getElementById('form-message');
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
            console.error('Error:', error);
            const formMessage = document.getElementById('form-message');
            formMessage.style.display = 'block';
            formMessage.textContent = 'There was a problem sending the message.';
            formMessage.style.color = 'red';
        });
    });
});

