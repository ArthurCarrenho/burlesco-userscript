import { eraseAllCookies } from '../utils.js';
export default function() {
  if (!document.querySelector('.wsj-snippet-login')) return null;
  eraseAllCookies();
  document.cookie = '';
  localStorage.clear();
  sessionStorage.clear();

  GM_xmlhttpRequest({
    method: 'GET',
    url: window.location.href,
    headers: {
      'Referer': 'https://www.facebook.com/'
    },
    anonymous: true,
    onload: function(response) {
      var parser = new DOMParser();
      var newDocument = parser.parseFromString(response.responseText,'text/html');
      if (newDocument.querySelector('article')) {
        document.body = newDocument.body;
      }
    }
  });
  return null;
}
