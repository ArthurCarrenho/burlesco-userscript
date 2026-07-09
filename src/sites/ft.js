import { eraseAllCookies } from '../utils.js';
export default function() {
  if (!document.querySelector('.barrier-banner')) return null;
  eraseAllCookies();
  document.cookie = '';
  localStorage.clear();
  sessionStorage.clear();
  indexedDB.deleteDatabase('next-flags');
  indexedDB.deleteDatabase('next:ads');
  document.querySelector('.o-cookie-message')?.remove();

  GM_xmlhttpRequest({
    method: 'GET',
    url: window.location.href,
    headers: {
      'Referer': 'https://www.google.com.br/'
    },
    anonymous: true,
    onload: function(response) {
      var parser = new DOMParser();
      var newDocument = parser.parseFromString(response.responseText,'text/html');
      if (newDocument.getElementsByClassName('article__content')[0]) {
        document.open();
        document.write(newDocument.getElementsByTagName('html')[0].innerHTML);
        document.close();
      }
    }
  });
  return null;
}
