// const fs = require('fs')
// const path = '../content.txt'

var compiled = document.querySelector('#compiled-markdown')
document.addEventListener('input', function (event) {
    if (!event.target.matches('#editor')) return
    compiled.innerHTML = marked(event.target.value, { sanitize: true })
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