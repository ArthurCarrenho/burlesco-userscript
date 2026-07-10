import { eraseCookie } from '../utils.js';

export default function() {
  eraseCookie('xbc');
  eraseCookie('_pcid');
  eraseCookie('_pcus');
  eraseCookie('__tbc');
  eraseCookie('__pvi');
  eraseCookie('_pctx');
  eraseCookie('__pat');

  return `
    (async () => {
      const observer = new MutationObserver(() => {
        document.querySelectorAll('getsitecontrol-widget').forEach(el => el.remove());
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });

      const data = JSON.parse(decodeURI(window.__ISOMORPHIC_DATA__)).state.apollo.ROOT_QUERY
      const key = Object.keys(data).filter(key => key.includes('article'))[0]

      const parts = data[key].article_body_components
        .map(item => {
          if (item.html) return '<div class="article-paragraph">' + item.html + '</div>';
          if (item.data && item.data.embed) return '<div class="article-paragraph">' + item.data.embed + '</div>';
          return '';
        })
      const content = parts.join('')

      while (true) {
        const articleContent = document.querySelector('.article-content')
        if (articleContent === null) {
            await new Promise(r => setTimeout(r, 1000));
            continue
        }

        articleContent.innerHTML = content
        document.querySelectorAll('.article-paragraph').forEach(item => {
          item.style.opacity = '1';
        })
        document.querySelectorAll('a').forEach(item => {
          item.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            return false;
          })
        })

        const paidContent = document.querySelector('.paid-content-apply');
        if (paidContent) {
          paidContent.classList.remove('paid-content-apply');
        }

        document.documentElement.classList.remove('tp-modal-open');
        document.body.classList.remove('tp-modal-open');

        var style = document.createElement('style');
        style.textContent = '.paid-content-template, .tp-backdrop, .tp-modal { display: none !important; } getsitecontrol-widget { display: none !important; } a[href*="google.com/preferences/source"], a[href*="google.com/preferences/source"] + div { display: none !important; }';
        (document.head||document.documentElement).appendChild(style);

        break;
      }
    })()
  `;
}
