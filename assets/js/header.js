/**
 * AinZara-Aluminum - Header Scroll Dynamic Module
 * Header is transparent at top of page and becomes colored/frosted on scroll.
 */
(function () {
  'use strict';

  var SCROLL_THRESHOLD = 20;
  var ticking = false;

  function updateHeader() {
    var header = document.querySelector('.menu-wrapper') || document.querySelector('#ed-2414697653');
    if (!header) {
      ticking = false;
      return;
    }

    var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (scrollY > SCROLL_THRESHOLD) {
      if (!header.classList.contains('header-scrolled')) {
        header.classList.add('header-scrolled');
      }
    } else {
      if (header.classList.contains('header-scrolled')) {
        header.classList.remove('header-scrolled');
      }
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }

  function init() {
    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial check
    updateHeader();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.AZHeader = {
    update: updateHeader
  };
})();
