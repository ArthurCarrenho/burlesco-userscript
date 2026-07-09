export default function() {
  GM_xmlhttpRequest({
    method: 'GET',
    url: window.location.href,
    headers: {
      'User-Agent': 'Googlebot/2.1 (+http://www.googlebot.com/bot.html)'
    },
    anonymous: true,
    onload: function(response) {
      var parser = new DOMParser();
      var newDocument = parser.parseFromString(response.responseText,'text/html');
      if (newDocument) {
        document.open();
        document.write(newDocument.getElementsByTagName('html')[0].innerHTML);
        document.close();
      }
    }
  });
  return null;
}
