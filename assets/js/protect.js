document.addEventListener('DOMContentLoaded', function() {
  // 1. Disable Right-Click
 /* document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }); */

  // 2. Disable Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
    }
    // Ctrl+Shift+I (Windows) or Cmd+Option+I (Mac)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
      e.preventDefault();
    }
    // Ctrl+Shift+J (Windows) or Cmd+Option+J (Mac)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
      e.preventDefault();
    }
    // Ctrl+U (Windows) or Cmd+U (Mac) - View Source
    if ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
    }
    // Ctrl+S (Windows) or Cmd+S (Mac) - Save Page
    if ((e.ctrlKey || e.metaKey) && (e.key === 'S' || e.key === 's')) {
      e.preventDefault();
    }
  });

  // 3. Disable Text Selection via JavaScript as a fallback
 /* document.addEventListener('selectstart', function(e) {
    e.preventDefault();
  }); */

  // 4. Infinite Debugger Loop (Anti-DevTools)
  // This function sets up a recursive debugger call. If DevTools is closed, the debugger statement is ignored and has no performance impact.
  // If DevTools is open, it pauses execution and makes DevTools extremely difficult to use.
  (function antiDevTools() {
    function debuggerLoop() {
      try {
        (function() { return false; }['constructor']('debugger')());
      } catch (err) {}
      setTimeout(debuggerLoop, 50);
    }
    debuggerLoop();
  })();
});
