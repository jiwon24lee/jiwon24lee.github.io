// Site behavior: theme picker, phone menu, header height for anchor offsets.
(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_KEY = "theme";
  var THEME_COLORS = { light: "#ffffff", dark: "#343a40" }; // keep in sync with _variables.scss

  // ─── Theme: "auto" (follow OS), "light" or "dark" ──────────────────
  function readTheme() {
    try {
      var t = localStorage.getItem(STORAGE_KEY);
      return t === "light" || t === "dark" ? t : "auto";
    } catch (e) {
      return "auto";
    }
  }

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
    // Browser UI color (mobile address bar): explicit choice overrides the OS-based defaults.
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (meta) {
      if (!meta.dataset.auto) meta.dataset.auto = meta.content;
      meta.content = THEME_COLORS[theme] || meta.dataset.auto;
    });
    var select = document.getElementById("theme-select");
    if (select) select.value = theme;
  }

  function saveTheme(theme) {
    try {
      if (theme === "auto") localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
  }

  // ─── Phone menu ────────────────────────────────────────────────────
  function setupMenu() {
    var header = document.querySelector(".masthead");
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!header || !toggle || !nav) return;

    function setOpen(open) {
      header.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    }

    toggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("nav-open"));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("click", function (e) {
      if (!header.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.classList.contains("nav-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // ─── Sticky header height → CSS variable (anchor scroll offset) ─────
  function trackHeaderHeight() {
    var header = document.querySelector(".masthead");
    if (!header) return;
    function update() {
      root.style.setProperty("--header-height", header.offsetHeight + "px");
    }
    update();
    if ("ResizeObserver" in window) new ResizeObserver(update).observe(header);
    else window.addEventListener("resize", update);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(readTheme());

    var select = document.getElementById("theme-select");
    if (select) {
      select.addEventListener("change", function () {
        saveTheme(select.value);
        applyTheme(select.value);
      });
    }
    // Keep other open tabs in sync.
    window.addEventListener("storage", function (e) {
      if (e.key === STORAGE_KEY) applyTheme(readTheme());
    });

    setupMenu();
    trackHeaderHeight();
  });
})();
