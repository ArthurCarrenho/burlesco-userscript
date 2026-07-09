export default function() {
  setInterval(() => {
    document.querySelector('.zephr-modal-open')?.classList.remove('zephr-modal-open');
    document.querySelector('.zephr-backdrop')?.remove();
    document.querySelector('.zephr-generic-modal')?.remove();
  }, 2000);
  return null;
}
