/* rozhodnisa.sk – vloženie volebnej kalkulačky do článku
 *
 * Použitie:
 *   <div data-rozhodnisa data-mesto="nitra" data-volba="kraj"></div>
 *   <script async src="https://rozhodnisa.sk/embed.js"></script>
 *
 * data-mesto: bratislava, kosice, presov, zilina, bystrica, nitra, trnava, trencin, poprad, martin, snv, michalovce
 * data-volba: primator (predvolené) alebo kraj
 * Výška widgetu sa prispôsobí obsahu automaticky.
 */
(function () {
  var BASE = 'https://rozhodnisa.sk';
  var frames = {};
  var counter = 0;

  function build(el) {
    if (el.getAttribute('data-rozhodnisa-ready')) return;
    el.setAttribute('data-rozhodnisa-ready', '1');
    var wid = 'rs' + (++counter);
    var q = 'mesto=' + encodeURIComponent(el.getAttribute('data-mesto') || '') +
            '&volba=' + encodeURIComponent(el.getAttribute('data-volba') || 'primator') +
            '&wid=' + wid;
    var f = document.createElement('iframe');
    f.src = BASE + '/embed?' + q;
    f.title = 'Volebná kalkulačka 2026 – rozhodnisa.sk';
    f.loading = 'lazy';
    f.setAttribute('scrolling', 'no');
    f.style.cssText = 'display:block;width:100%;max-width:480px;height:480px;border:0;overflow:hidden';
    el.appendChild(f);
    frames[wid] = f;
  }

  function init() {
    var els = document.querySelectorAll('[data-rozhodnisa]');
    for (var i = 0; i < els.length; i++) build(els[i]);
  }

  window.addEventListener('message', function (e) {
    var d = e.data;
    if (!d || d.type !== 'rozhodnisa-embed-height' || !frames[d.wid]) return;
    if (frames[d.wid].contentWindow !== e.source) return; // accept only our own iframe
    var h = parseInt(d.height, 10);
    if (h > 100 && h < 3000) frames[d.wid].style.height = h + 'px';
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
