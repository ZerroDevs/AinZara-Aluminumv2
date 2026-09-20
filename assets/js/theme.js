/**
 * AinZara-Aluminum - Theme Management Module
 * Supports Light & Dark modes with LocalStorage persistence.
 * Default: 'light'
 * Uses icon font classes (no SVGs, no emojis).
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'az_theme';
  var THEME_LIGHT = 'light';
  var THEME_DARK = 'dark';

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY) || THEME_LIGHT;
    } catch (e) {
      return THEME_LIGHT;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // LocalStorage might be disabled or full
    }
  }

  function updateToggleButtons(theme) {
    var buttons = document.querySelectorAll('.theme-toggle');
    buttons.forEach(function (btn) {
      var isDark = theme === THEME_DARK;
      btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      btn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      
      var icon = btn.querySelector('.theme-icon');
      if (icon) {
        if (isDark) {
          // Icon to switch to light mode
          icon.innerHTML = '<i class="fa-solid fa-sun fa-fw" aria-hidden="true"></i>';
        } else {
          // Icon to switch to dark mode
          icon.innerHTML = '<i class="fa-solid fa-moon fa-fw" aria-hidden="true"></i>';
        }
      }
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
    setStoredTheme(theme);
    updateToggleButtons(theme);

    window.dispatchEvent(new CustomEvent('az:themeChange', { detail: { theme: theme } }));
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
    var next = current === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme(next);
  }

  // Initial immediate application
  var initialTheme = getStoredTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  // Bind event listeners when DOM is loaded
  function init() {
    updateToggleButtons(initialTheme);

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.theme-toggle');
      if (btn) {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.AZTheme = {
    getTheme: function () {
      return document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
    },
    setTheme: applyTheme,
    toggle: toggleTheme
  };
})();
