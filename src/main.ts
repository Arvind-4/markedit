import './css/style.css';
import './css/navbar.css';
import './css/footer.css';

import { saveAs } from 'file-saver';
import { marked } from 'marked';

document.addEventListener(
  'input',
  async (event: Event) => {
    if (!(event.target as Element).matches('#editor')) return;
    const compiledMarkdown = document.querySelector(
      '#compiled-markdown'
    ) as HTMLElement;
    const editorValue = (event.target as HTMLInputElement).value;
    const markedOptions = { sanitize: true, async: true };
    const compiledHTML = await marked(editorValue, markedOptions);
    compiledMarkdown.innerHTML = compiledHTML;
  },
  false
);

document.getElementById('save-file')!.onclick = () => {
  const filename = prompt('Please Enter the Name of the File', 'Code' + '.txt');
  if (filename === null || filename === '') {
    return;
  } else {
    const editor = document.querySelector('#editor') as HTMLTextAreaElement;
    const blob = new Blob([editor.value], { type: 'text/markdown' });
    saveAs(blob, filename);
  }
};
