/**
 * AinZara-Aluminum - Mobile Navigation & Responsive Helper Module
 * Manages mobile drawer, hamburger toggle, and responsive touch interactions.
 * Uses icon font classes (no SVGs, no emojis).
 */
(function () {
  'use strict';

  var drawerOpen = false;

  function toggleDrawer(open) {
    var drawer = document.querySelector('.mobile-drawer');
    var backdrop = document.querySelector('.mobile-backdrop');
    var toggleBtn = document.querySelector('.mobile-menu-btn');

    if (typeof open === 'boolean') {
      drawerOpen = open;
    } else {
      drawerOpen = !drawerOpen;
    }

    if (drawer) {
      if (drawerOpen) {
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
      } else {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
      }
    }

    if (backdrop) {
      if (drawerOpen) {
        backdrop.classList.add('is-open');
      } else {
        backdrop.classList.remove('is-open');
      }
    }

    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', drawerOpen ? 'true' : 'false');
      var icon = toggleBtn.querySelector('i');
      if (icon) {
        if (drawerOpen) {
          icon.className = 'fa-solid fa-xmark fa-fw';
        } else {
          icon.className = 'fa-solid fa-bars fa-fw';
        }
      }
    }

    // Toggle body scroll locking
    if (drawerOpen) {
      document.body.classList.add('mobile-nav-locked');
    } else {
      document.body.classList.remove('mobile-nav-locked');
    }
  }

  function init() {
    // Hamburger button click
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.mobile-menu-btn');
      if (btn) {
        e.preventDefault();
        toggleDrawer();
        return;
      }

      // Close button inside drawer
      var closeBtn = e.target.closest('.mobile-drawer-close');
      if (closeBtn) {
        e.preventDefault();
        toggleDrawer(false);
        return;
      }

      // Backdrop click
      var backdrop = e.target.closest('.mobile-backdrop');
      if (backdrop) {
        e.preventDefault();
        toggleDrawer(false);
        return;
      }

      // Link click inside drawer
      var navLink = e.target.closest('.mobile-drawer a');
      if (navLink) {
        if (!navLink.classList.contains('lang-toggle') && !navLink.classList.contains('theme-toggle')) {
          toggleDrawer(false);
        }
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawerOpen) {
        toggleDrawer(false);
      }
    });

    // Close on resize if expanded beyond mobile breakpoint
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860 && drawerOpen) {
        toggleDrawer(false);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.AZMobile = {
    toggle: toggleDrawer,
    close: function () { toggleDrawer(false); },
    open: function () { toggleDrawer(true); }
  };
})();
