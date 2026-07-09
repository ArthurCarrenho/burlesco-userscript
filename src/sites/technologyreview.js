import { eraseCookie } from '../utils.js';
export default function() {
  document.querySelector('#template-container')?.remove();
  localStorage.clear();
  eraseCookie('xbc');
  eraseCookie('_pcid');
  eraseCookie('_pcus');
  eraseCookie('__tbc');
  eraseCookie('__pvi');
  eraseCookie('_pctx');
  return null;
}
