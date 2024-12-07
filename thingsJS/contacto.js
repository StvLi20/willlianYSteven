document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    const validaciones = {
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        phone: /^(?:\+504)?[379][0-9]{7}$/
    };

    const errorMessages = {
        email: 'Por favor ingrese un correo electrónico válido',
        phone: 'Ingrese un número válido de Honduras (8 dígitos comenzando con 3, 7, 8 o 9)',
        required: 'Este campo es requerido'
    };

    const validateField = (input) => {
        const field = input.id;
        let value = input.value.trim();
        const errorSpan = document.getElementById(`${field}Error`);

        if (!value) {
            input.classList.add('invalid');
            errorSpan.textContent = errorMessages.required;
            return false;
        }

        if (field === 'email') {
            if (!validaciones.email.test(value)) {
                input.classList.add('invalid');
                errorSpan.textContent = errorMessages.email;
                return false;
            }
        } else if (field === 'phone') {
            value = value.replace('+504', ''); 
            if (!validaciones.phone.test(value)) {
                input.classList.add('invalid');
                errorSpan.textContent = errorMessages.phone;
                return false;
            }
        }

        input.classList.remove('invalid');
        errorSpan.textContent = '';
        return true;
    };

    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });

        input.addEventListener('input', () => {
            input.classList.remove('invalid');
            document.getElementById(`${input.id}Error`).textContent = '';
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            console.log('Formulario válido - Datos:', {
                name: form.name.value,
                email: form.email.value,
                subject: form.subject.value,
                message: form.message.value
            });

            alert('Formulario enviado correctamente!');
            form.reset(); 
        }
    });
});
