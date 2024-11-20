// Get references to elements
const openPopupBtn = document.getElementById('openPopupBtn');
const emailPopup = document.getElementById('emailPopup');
const overlay = document.getElementById('overlay');
const closePopupBtn = document.getElementById('closePopupBtn');

// Open the pop-up
openPopupBtn.addEventListener('click', () => {
    emailPopup.style.display = 'block';
    overlay.style.display = 'block';
});

// Close the pop-up
closePopupBtn.addEventListener('click', () => {
    emailPopup.style.display = 'none';
    overlay.style.display = 'none';
});

// Handle overlay click to close the pop-up
overlay.addEventListener('click', () => {
    emailPopup.style.display = 'none';
    overlay.style.display = 'none';
});

// Placeholder for sending the email
document.getElementById('sendEmailBtn').addEventListener('click', () => {
    const subject = document.getElementById('emailSubject').value;
    const body = document.getElementById('emailBody').value;

    alert(`Email sent!\n\nSubject: ${subject}\n\nMessage: ${body}`);
    emailPopup.style.display = 'none';
    overlay.style.display = 'none';
});
