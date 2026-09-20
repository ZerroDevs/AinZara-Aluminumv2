/**
 * AinZara-Aluminum - Back to Top (Footer Link)
 * Styles the #az-footer-top-btn anchor in the footer copyright bar.
 */
(function () {
  'use strict';

  var style = document.createElement('style');
  style.textContent = [
    '/* Footer back-to-top link */',
    '#az-footer-top-btn {',
    '  display: inline-flex;',
    '  align-items: center;',
    '  gap: 6px;',
    '  font-size: 13px;',
    '  font-weight: 600;',
    '  color: #475569;',
    '  text-decoration: none;',
    '  padding: 6px 12px;',
    '  border-radius: 20px;',
    '  border: 1px solid rgba(0,0,0,0.1);',
    '  transition: all 0.2s ease;',
    '  white-space: nowrap;',
    '}',
    '#az-footer-top-btn:hover {',
    '  color: #125fb4;',
    '  border-color: #125fb4;',
    '  background: rgba(18,95,180,0.06);',
    '  transform: translateY(-1px);',
    '  text-decoration: none;',
    '}',
    '#az-footer-top-btn i {',
    '  font-size: 12px;',
    '}',
    '[data-theme="dark"] #az-footer-top-btn {',
    '  color: #94a3b8;',
    '  border-color: rgba(255,255,255,0.12);',
    '}',
    '[data-theme="dark"] #az-footer-top-btn:hover {',
    '  color: #38bdf8;',
    '  border-color: #38bdf8;',
    '  background: rgba(56,189,248,0.08);',
    '}'
  ].join('\n');
  document.head.appendChild(style);
})();
