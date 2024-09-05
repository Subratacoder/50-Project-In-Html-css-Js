const qr_input = document.getElementById('Qr-input');
const qr_image = document.getElementById('Qr-img');
const qr_button = document.getElementById('Qr-button');

console.log(qr_button, qr_image, qr_input);

qr_button.addEventListener('click', () => {
    const inputValue = qr_input.value;

    if(inputValue === ''){
        alert('Plese Enter a valid URL')
        return;

    }else{
       qr_image.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${qr_input}'
       qr_image.alt = "QR code for ${qr_input}"
    }
});
