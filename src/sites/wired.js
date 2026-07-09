import { eraseAllCookies } from '../utils.js';
export default function() {
  eraseAllCookies();
  return `
    window.onload = function() {
      var style = document.createElement('style');
      style.type = 'text/css';
      var css='.paywall-container-component {display: none !important}';
      style.appendChild(document.createTextNode(css));
      document.head.appendChild(style);
    }
    document.cookie = "";
    localStorage.clear();
    sessionStorage.clear();
  `;
}
