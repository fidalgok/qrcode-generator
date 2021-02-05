import QRCode from 'qrcode';
(
    function init() {
        function saveImage(e) {

        }
        const submit = document.querySelector('#submit');

        submit.addEventListener('click', function handleSubmit(e) {
            console.log('clicked');
            const text = document.querySelector('#qrcode').value;
            // options for the qrcode
            // TODO add color functionality?
            // add to options, also takes transparent hex values
            // color: {dark: "#000", light: "#fff"}
            const options = {
                errorCorrectionLevel: "H",
                type: "image/jpeg",
                margin: 1,
                color: {
                    light: "#fff",
                    dark: "#333"
                },
                width: 400
            }
            QRCode.toDataURL(text, options,
                function (err, url) {
                    if (err) { console.error(err) };

                    const img = document.querySelector('#generated');
                    img.src = url;
                    img.setAttribute('alt', 'generated QRCode')
                }
            )
        });

    }
)();