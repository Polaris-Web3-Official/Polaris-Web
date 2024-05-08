//Funcion para pasar un texto a un elemento html

export function formatTextToHtml(htmlString) {
  const range = document.createRange();
  const fragment = range.createContextualFragment(htmlString);
  return fragment.firstChild;
}