export default function() {
  return `
    window.addEventListener('DOMContentLoaded', () => {
      const observer = new MutationObserver(() => {
        document.querySelectorAll('.barreiraJornada').forEach(div => div.remove());
        document.querySelectorAll('.mobiliarioFooter').forEach(div => div.remove());
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      });
      observer.observe(document.body, { childList: true, subtree: true });
    });
  `;
}
