var compiled = document.querySelector('#compiled-markdown')
document.addEventListener('input', function (event) {
    if (!event.target.matches('#editor')) return

    compiled.innerHTML = marked(event.target.value, { sanitize: true })

}, false)