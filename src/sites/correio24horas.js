export default function() {
  return `
    jQuery('[class^=paywall]').remove();
    jQuery('[class^=blocked]').removeClass();
    jQuery('[id^=paywall]').removeClass('hide').removeClass('is-active');
    jQuery('.noticias-single__content__text').attr('style', 'height:auto;');
    jQuery('[id^=paywall]').remove();
    setInterval(function() { jQuery('[itemprop^=articleBody]').css('height', '100%'); console.log('Burlesco: forçando altura...'); }, 1000);
  `;
}
