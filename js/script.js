document.addEventListener('input', function (event) {
    if (!event.target.matches('#editor')) return
    document.querySelector('#compiled-markdown').innerHTML = marked(event.target.value, { sanitize: true })
}, false)

document.getElementById('save-file').onclick = function () {
    var filename = prompt("Please Enter the Name of the File", "Code" + '.txt');
    if (filename === null || filename === "") {
        filename.close()
    }
    else {
        var blob = new Blob([document.querySelector('#editor').value], { types: 'text/markdown' })
        saveAs(blob, filename)
    }
}