document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-navigation');

  if (!toggle || !nav) return;

  function openNav() {
    toggle.setAttribute('aria-expanded', 'true');
    nav.classList.add('open');
    nav.setAttribute('aria-hidden', 'false');
  }

  function closeNav() {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    nav.setAttribute('aria-hidden', 'true');
  }

  toggle.addEventListener('click', function () {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) closeNav(); else openNav();
  });

  // Закрывать меню при клике вне навигации
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      closeNav();
    }
  });

  // Закрывать на ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
});
