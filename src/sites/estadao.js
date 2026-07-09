export default function() {
  return `
    window.addEventListener('DOMContentLoaded', () => {
      Object.defineProperty(window, 'pwz', {
        configurable: true,
        writable: false,
        value: function () {
          console.log('paywall bloqueado');
        }
      });
    });
  `;
}
