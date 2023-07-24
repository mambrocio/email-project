let copyText = document.getElementById("emailMsg");

document.getElementById("sourcecode").addEventListener("input", function(){
    copyText.value = this.value;
})


function runcode() {
    var content = document.getElementById('sourcecode').value;
    var iframe = document.getElementById('targetcode');
    iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument) ?
        iframe.contentDocument.document : iframe.contentDocument;

    iframe.document.open();
    iframe.document.write(content);
    iframe.document.close();
    return false;
}
runcode();