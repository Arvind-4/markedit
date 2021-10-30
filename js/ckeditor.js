var editor = CKEDITOR.replace('editor', {
    width: '100%',
    height: '100vh',
})

editor.on( 'change', function( evt ) {
    if (evt) {
        document.querySelector('#compiled-markdown').innerHTML = evt.editor.getData()
    }
})