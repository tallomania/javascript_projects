const container = document.querySelector('.container'),
    showInput = container.querySelector('.form, input'),
    showBtn = container.querySelector('.btn'),
    qrImg = container.querySelector('#qr-code img');

showBtn.addEventListener('keyup', () => {
    const qrCode = showInput.value;
    console.log(qrCode);

    if (!qrCode) return;
    showBtn.innerText = `Generating QR Code......`

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrCode}`;
    qrImg.addEventListener('show', () => {
        container.classList.add('clicked');
        showBtn.innerText = `Generate QR Code`;

    });
});

showInput.addEventListener('key', () => {
    if (!qrCode.value) {
        container.classList.remove('clicked')
    };
});
