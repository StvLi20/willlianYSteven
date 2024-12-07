document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donationForm');

    donationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const donorName = document.getElementById('donorName').value.trim();
        const donorEmail = document.getElementById('donorEmail').value.trim();
        const donationAmount = document.getElementById('donationAmount').value.trim();
        const message = document.getElementById('message').value.trim();

       
        let isValid = true;
        let errorMessage = '';

        
        if (donorName === '') {
            isValid = false;
            errorMessage += 'Por favor, ingrese su nombre.\n';
        }

        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (donorEmail === '' || !emailRegex.test(donorEmail)) {
            isValid = false;
            errorMessage += 'Por favor, ingrese un correo electrónico válido.\n';
        }

        
        const amountRegex = /^[\d.,]+$/;
        if (donationAmount === '' || !amountRegex.test(donationAmount)) {
            isValid = false;
            errorMessage += 'Por favor, ingrese un monto de donación válido.\n';
        }

        
        if (!isValid) {
            alert(errorMessage);
            return;
        }

        
        simulateFormSubmission({
            name: donorName,
            email: donorEmail,
            amount: donationAmount,
            message: message
        });
    });

    function simulateFormSubmission(donationData) {
        
        console.log('Donación recibida:', donationData);
        
       
        const successModal = createSuccessModal(donationData);
        document.body.appendChild(successModal);

       
        donationForm.reset();
    }

    function createSuccessModal(donationData) {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';

        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = 'white';
        modalContent.style.padding = '2rem';
        modalContent.style.borderRadius = '10px';
        modalContent.style.textAlign = 'center';
        modalContent.style.maxWidth = '500px';

        modalContent.innerHTML = `
            <h2>¡Gracias por su donación!</h2>
            <p>Donante: ${donationData.name}</p>
            <p>Monto: ${donationData.amount} ${donationData.amount.includes('$') ? 'USD' : 'Lempiras'}</p>
            <p>Su apoyo ayudará a impulsar la educación STEM en Honduras.</p>
            <button id="closeModalBtn" style="
                margin-top: 1rem;
                padding: 0.5rem 1rem;
                background-color: #3498db;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            ">Cerrar</button>
        `;

        modal.appendChild(modalContent);

        
        const closeModalBtn = modalContent.querySelector('#closeModalBtn');
        closeModalBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        return modal;
    }
});