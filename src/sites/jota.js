export default function() {
  var page_url = window.location.href;
  if (page_url.search('paywall') >= 0) {
    var new_page_url = window.location.href.replace('www.jota.info/paywall?redirect_to=//', '');
    GM_xmlhttpRequest({
      method: 'GET',
      url: new_page_url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
      },
      anonymous: true,
      onload: function(response) {
        var parser = new DOMParser();
        var newDocument = parser.parseFromString(response.responseText,'text/html');
        newDocument.getElementsByClassName('jota-paywall')[0].remove();
        if (newDocument) {
          document.open();
          history.pushState({urlPath: new_page_url}, '', new_page_url);
          document.write(newDocument.getElementsByTagName('html')[0].innerHTML);
          document.close();
        }
      }
    });
  }
}
