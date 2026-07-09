import jotaStart from './sites/jota.js';
import crusoeStart from './sites/crusoe.js';
import correiodopovoStart from './sites/correiodopovo.js';
import gauchazhIdle from './sites/gauchazh.js';
import economistIdle from './sites/economist.js';
import ftIdle from './sites/ft.js';
import foreignpolicyIdle from './sites/foreignpolicy.js';
import ogloboIdle from './sites/oglobo.js';
import valorIdle from './sites/valor.js';
import folhaIdle from './sites/folha.js';
import estadaoIdle from './sites/estadao.js';
import abrilIdle from './sites/abril.js';
import correio24horasIdle from './sites/correio24horas.js';
import nytimesIdle from './sites/nytimes.js';
import wsjIdle from './sites/wsj.js';
import bloombergIdle from './sites/bloomberg.js';
import diariodaregiaoIdle from './sites/diariodaregiao.js';
import diariopopularIdle from './sites/diariopopular.js';
import wiredIdle from './sites/wired.js';
import haaretzIdle from './sites/haaretz.js';
import dgabcIdle from './sites/dgabc.js';
import emIdle from './sites/em.js';
import newsweekIdle from './sites/newsweek.js';
import forbesIdle from './sites/forbes.js';
import seudinheiroIdle from './sites/seudinheiro.js';
import observadorIdle from './sites/observador.js';
import technologyreviewIdle from './sites/technologyreview.js';
import galileuIdle from './sites/galileu.js';

const startSites = [
  { domain: /jota\.info/, handler: jotaStart },
  { domain: /crusoe\.com\.br/, handler: crusoeStart },
  { domain: /correiodopovo\.com\.br/, handler: correiodopovoStart }
];

const idleSites = [
  { domain: /gauchazh\.clicrbs\.com\.br/, handler: gauchazhIdle },
  { domain: /www\.economist\.com/, handler: economistIdle },
  { domain: /ft\.com/, handler: ftIdle },
  { domain: /foreignpolicy\.com/, handler: foreignpolicyIdle },
  { domain: /oglobo\.globo\.com/, handler: ogloboIdle },
  { domain: /valor\.globo\.com/, handler: valorIdle },
  { domain: /folha\.uol\.com\.br/, handler: folhaIdle },
  { domain: /estadao\.com\.br/, handler: estadaoIdle },
  { domain: /abril\.com\.br/, handler: abrilIdle },
  { domain: /correio24horas\.com\.br/, handler: correio24horasIdle },
  { domain: /nytimes\.com/, handler: nytimesIdle },
  { domain: /wsj\.com/, handler: wsjIdle },
  { domain: /bloomberg\.com/, handler: bloombergIdle },
  { domain: /diariodaregiao\.com\.br/, handler: diariodaregiaoIdle },
  { domain: /diariopopular\.com\.br/, handler: diariopopularIdle },
  { domain: /wired\.com/, handler: wiredIdle },
  { domain: /haaretz\.com|haaretz\.co\.il/, handler: haaretzIdle },
  { domain: /dgabc\.com\.br/, handler: dgabcIdle },
  { domain: /em\.com\.br/, handler: emIdle },
  { domain: /newsweek\.pl|forbes\.pl/, handler: newsweekIdle },
  { domain: /forbes\.com/, handler: forbesIdle },
  { domain: /seudinheiro\.com/, handler: seudinheiroIdle },
  { domain: /observador\.pt/, handler: observadorIdle },
  { domain: /technologyreview\.com/, handler: technologyreviewIdle },
  { domain: /revistagalileu\.globo\.com/, handler: galileuIdle }
];

const host = document.location.host;

for (let site of startSites) {
  if (site.domain.test(host)) {
    site.handler();
    break;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  for (let site of idleSites) {
    if (site.domain.test(host)) {
      let code = site.handler();
      if (code) {
        var script = document.createElement('script');
        script.textContent = code;
        (document.head||document.documentElement).appendChild(script);
        script.parentNode.removeChild(script);
      }
      break;
    }
  }
});