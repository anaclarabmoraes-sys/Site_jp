
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  var theme = (stored === 'dark' || stored === 'light')
    ? stored
    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function apply(t) {
    root.setAttribute('data-theme', t);
    btn.setAttribute('aria-pressed', t === 'dark');
    btn.setAttribute('aria-label', t === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
    btn.querySelector('.icon-sun').style.display = t === 'dark' ? 'block' : 'none';
    btn.querySelector('.icon-moon').style.display = t === 'dark' ? 'none' : 'block';
    try { localStorage.setItem('theme', t); } catch (e) {}
  }

  apply(theme);
  btn.addEventListener('click', function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    apply(theme);
  });
})();
