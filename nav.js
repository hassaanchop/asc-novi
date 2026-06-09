/* ============================================================
   ASC Novi — Shared Navigation
   ============================================================ */
(function () {
  const NAV_HTML = `
<nav id="site-nav" role="navigation" aria-label="Main navigation">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo" aria-label="Bone and Joint Surgery Center of Novi — Home">
      <img src="images/logo-original.jpg" alt="Bone and Joint Surgery Center of Novi" class="nav-logo-img" />
    </a>

    <ul class="nav-links" role="list">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="preparing.html">Preparing for Surgery</a></li>
      <li><a href="patients.html">Patient Information</a></li>
      <li><a href="billing.html">Insurance &amp; Billing</a></li>
      <li><a href="contact.html">Contact Us</a></li>
    </ul>

    <div class="nav-right">
      <a href="tel:2486621500" class="nav-phone" aria-label="Call us at 248-662-1500">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
            19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
            12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45
            12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        248-662-1500
      </a>
      <a href="https://secure.epayhealthcare.com/bjn568epay" target="_blank" rel="noopener noreferrer"
        class="btn btn-primary btn-sm">Pay Bill</a>
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>

  <div class="nav-mobile-menu" id="nav-mobile-menu" role="menu" aria-hidden="true">
    <a href="index.html" role="menuitem">Home</a>
    <a href="about.html" role="menuitem">About Us</a>
    <a href="preparing.html" role="menuitem">Preparing for Surgery</a>
    <a href="patients.html" role="menuitem">Patient Information</a>
    <a href="billing.html" role="menuitem">Insurance &amp; Billing</a>
    <a href="contact.html" role="menuitem">Contact Us</a>
    <div class="nav-mobile-bottom">
      <a href="tel:2486621500" class="nav-mobile-phone">248-662-1500</a>
      <a href="https://secure.epayhealthcare.com/bjn568epay" target="_blank" rel="noopener noreferrer"
        class="btn btn-primary btn-sm">Pay Bill</a>
    </div>
  </div>
</nav>
`;

  /* Inject nav into placeholder */
  const root = document.getElementById('nav-root');
  if (root) {
    root.outerHTML = NAV_HTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  }

  const nav       = document.getElementById('site-nav');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile-menu');

  /* Scroll shadow */
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Hamburger toggle */
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  });

  /* Close mobile menu on link click */
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });

  /* Active link */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#site-nav .nav-links a, #nav-mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
})();
