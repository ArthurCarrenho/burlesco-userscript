export default function() {
  let style = document.createElement('style');
  style.type = 'text/css';
  let css = `
    section[data-ds-component="paywall"] {
      display: none !important;
    }
    body {
      overflow: auto !important;
    }
  `;
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
  return null;
}
