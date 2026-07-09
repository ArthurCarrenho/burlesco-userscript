export default function() {
  return `
    document.getElementById("paywall_bg")?.remove();
    document.body.classList.remove("overlay-no-scroll");
    document.body.style.overflow = "visible";
    document.documentElement.classList.remove("overlay-no-scroll");
  `;
}
