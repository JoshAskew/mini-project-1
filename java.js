function copyToClipboard(code) {
    const codeElement = document.getElementById(code);
    const codeText = codeElement.innerText;

    navigator.clipboard.writeText(codeText).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
