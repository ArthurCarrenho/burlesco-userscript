export default function() {
  return `
    window.addEventListener('DOMContentLoaded', () => {
      const observer = new MutationObserver(() => {
        document.querySelectorAll('.barreiraJornada').forEach(div => div.remove());
        document.querySelectorAll('.mobiliarioFooter').forEach(div => div.remove());
        document.querySelectorAll('#template-container').forEach(div => div.remove());
      });
      observer.observe(document.body, { childList: true, subtree: true });
    });
  `;
}
