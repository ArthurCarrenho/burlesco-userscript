export default function() {
  document.cookie = 'ec_limit=allow';
  return `
    var artBodyContainer = document.querySelector("article.article");
    var artBody = artBodyContainer.innerHTML;
    checkPaywall();
    function checkPaywall () {
        let paywallBox = document.querySelector(".layout-article-regwall");
        if (paywallBox) {
            artBodyContainer.innerHTML = artBody;
        } else {
            setTimeout(checkPaywall, 100);
        }
    };
  `;
}
