export default function() {
  return `
    window.addEventListener('DOMContentLoaded', () => {
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

      const observer = new MutationObserver(() => {
        document.querySelector('#paywall-fill')?.remove();
        document.querySelector('#paywall-flutuante')?.remove();
        document.querySelector('#paywall-content')?.remove();
        document.querySelector('#paywall-screen')?.remove();
        
        if (document.documentElement.style.overflow === 'hidden') {
          document.documentElement.style.overflow = 'auto';
          document.documentElement.style.height = 'auto';
        }
        if (document.body.style.overflow === 'hidden') {
          document.body.style.overflow = 'auto';
          document.body.style.height = 'auto';
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    });
  `;
}
