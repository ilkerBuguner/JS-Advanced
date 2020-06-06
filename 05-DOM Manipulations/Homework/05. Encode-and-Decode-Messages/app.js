function encodeAndDecodeMessages() {
    document.querySelectorAll('button')[0].addEventListener('click', encodeAndSend);
    document.querySelectorAll('button')[1].addEventListener('click', decodeAndRead);
    const receiverTextArea = document.querySelectorAll('textArea')[1];

    function encodeAndSend(e) {
        const textArea = e.target.previousSibling.previousSibling;
        const textAreaValue = textArea.value;
        if (textAreaValue.length > 0) {
            let encodedMessage = '';
            for (let i = 0; i < textAreaValue.length; i++) {
                const currentCharPrevAsciiValue = String.fromCharCode(textAreaValue[i].charCodeAt() + 1);
                encodedMessage += currentCharPrevAsciiValue;
            }
            textArea.value = '';
            receiverTextArea.value = encodedMessage;
        }
    }

    function decodeAndRead(e) {
        const receiverTextAreaValue = receiverTextArea.value;
        if (receiverTextAreaValue.length > 0) {
            let decodedMessage = '';
            for (let i = 0; i < receiverTextAreaValue.length; i++) {
                const currentCharNextAsciiValue = String.fromCharCode(receiverTextAreaValue[i].charCodeAt() - 1);
                decodedMessage += currentCharNextAsciiValue;
            }
            receiverTextArea.value = decodedMessage;
        }
    }
}