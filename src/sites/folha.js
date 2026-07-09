export default function() {
  return `
    const originalFetch = window.fetch;
    window.fetch = function(resource, init) {
        if (typeof resource === 'string' && resource.includes('paywall.folha.uol.com.br/wall.json')) {
            console.log('[FolhaPaywall] Interceptando paywall.json');
            const fakeResponse = new Response(JSON.stringify({ paywall: "off", status: "ok" }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
            return Promise.resolve(fakeResponse);
        }
        return originalFetch.apply(this, arguments);
    };

    const style = document.createElement('style');
    style.textContent = '.c-top-signup-inner, .c-subscribe-ads { display: none !important; }';
    if (document.head) {
      document.head.appendChild(style);
    } else {
      document.documentElement.appendChild(style);
    }

    const observer = new MutationObserver(() => {
      const pFill = document.querySelector('#paywall-fill');
      if (pFill) pFill.remove();
      
      const pFlutuante = document.querySelector('#paywall-flutuante');
      if (pFlutuante) pFlutuante.remove();
      
      const pContent = document.querySelector('#paywall-content');
      if (pContent) pContent.remove();
      
      const pScreen = document.querySelector('#paywall-screen');
      if (pScreen) pScreen.remove();
      
      if (document.documentElement.style.overflow === 'hidden') {
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.height = 'auto';
      }
      if (document.body && document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
      }
    });
    
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }
  `;
}
