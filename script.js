

function markdownChange() {
  let text = document.getElementById('markdown-it').value,
      target = document.getElementById('targetDiv'),
      converter = new showdown.Converter(),
      html = converter.makeHtml(text);
    
    target.innerHTML = html;
}
