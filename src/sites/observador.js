export default function() {
  setInterval(() => {
    document.querySelector('.piano-article-blocker')?.remove();
    if(document.querySelector('.article-body-wrapper')) {
      document.querySelector('.article-body-wrapper').style.maxHeight = 'inherit';
    }
    document.querySelector('.premium-article')?.classList.add('article-shown');
  }, 5000);
  return null;
}
