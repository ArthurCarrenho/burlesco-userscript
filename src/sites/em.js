export default function() {
  window.id_acesso_noticia = 0;
  let style = document.createElement('style');
  style.type = 'text/css';
  let css=`
    .news-blocked {
      display: none !important
    }
    .news-blocked-no-scroll {
      overflow: auto !important;
      width: auto !important;
      position: unset !important;
    }
    div[itemprop="articleBody"] {
      height: auto !important;
    }
  `;
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
  return null;
}
