/**
 * Converts Outer HTML to element (w/children)
 * @param {string} html Outer HTML
 * @returns {HTMLElement} Resulting Element
 */
export function HTMLtoElement(html) {
  const element = document.createElement('div');
  element.innerHTML = html;
  if (element.childElementCount === 1) return element.firstChild;
  return element;
}

export default { HTMLtoElement };
