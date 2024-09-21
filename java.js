document.getElementById('flexboxCode').addEventListener('click', function() {
    const codeText = this.innerText.trim();

    navigator.clipboard.writeText(codeText).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
});