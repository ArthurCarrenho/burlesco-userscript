export default function() {
  const cleanPaywall = () => {
    const div = document.querySelector('[id^="pwm"] > div');
    const iframe = document.querySelector('[id^="pwm"] > iframe');
    document.querySelector('body').style.overflow = 'initial';
    iframe?.parentNode.removeChild(iframe);
    div?.parentNode.removeChild(div);
  };
  setTimeout(cleanPaywall, 4000);
  cleanPaywall();
}
