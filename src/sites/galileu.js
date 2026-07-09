export default function() {
  const cleanGalileu = () => {
    const div = document.querySelector('#detecta-adblock');
    document.querySelector('body').style.overflow = 'initial';
    div?.parentNode.removeChild(div);
  };
  cleanGalileu();
  setTimeout(cleanGalileu, 4000);
  return null;
}
