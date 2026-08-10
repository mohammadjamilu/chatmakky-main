(function () {
      const toggle = document.querySelector('.menu-toggle');
      const menu = document.getElementById('mobile-menu');
      const closeBtn = menu ? menu.querySelector('.mm-close') : null;
      const themeToggle = document.querySelector('.theme-toggle');
      const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;

      const setTheme = (light) => {
        document.body.classList.toggle('light-mode', light);
        if (themeToggle) themeToggle.setAttribute('aria-pressed', light ? 'true' : 'false');
        if (themeIcon) themeIcon.textContent = light ? '☀️' : '🌙';
      };

      const savedTheme = localStorage.getItem('theme');
      setTheme(savedTheme === 'light');

      if (themeToggle) {
        themeToggle.addEventListener('click', function () {
          const nextLight = !document.body.classList.contains('light-mode');
          setTheme(nextLight);
          localStorage.setItem('theme', nextLight ? 'light' : 'dark');
        });
      }

      if (!toggle || !menu) return;

      const setOpen = (open) => {
        menu.classList.toggle('open', open);
        menu.setAttribute('aria-hidden', open ? 'false' : 'true');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
      };

      setOpen(false);

      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = menu.classList.contains('open');
        setOpen(!isOpen);
      });

      if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          setOpen(false);
        });
      }

      menu.addEventListener('click', function (e) {
        if (e.target === menu) {
          setOpen(false);
        }
      });

      menu.querySelectorAll('.mm-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          setOpen(false);
        });
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
          setOpen(false);
        }
      });
    })();

(function () {
      const body = document.body;
      const buttons = [
        document.getElementById('theme-toggle'),
        document.getElementById('theme-toggle-mobile')
      ].filter(Boolean);

      function syncButtons(isLight) {
        buttons.forEach(btn => {
          btn.setAttribute('aria-pressed', String(isLight));
          const icon = btn.querySelector('.theme-icon');
          if (icon) icon.textContent = isLight ? '☀️' : '🌙';
          btn.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Toggle light mode');
        });
      }

      function applyTheme(isLight) {
        body.classList.toggle('light-mode', isLight);
        syncButtons(isLight);
      }

      const saved = localStorage.getItem('theme');
      const initialLight = saved ? saved === 'light' : false;
      applyTheme(initialLight);

      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const isLight = !body.classList.contains('light-mode');
          applyTheme(isLight);
          localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
      });
    })();

(function () {
      const BODY_CLASS = 'light-mode';
      const STORAGE_KEY = 'chatmakky-theme';

      function getNavActions() {
        return document.querySelector('header .nav-actions');
      }

      function getMobileMenu() {
        return document.getElementById('mobile-menu');
      }

      function createToggleButton() {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-ghost theme-toggle';
        btn.setAttribute('aria-label', 'Toggle theme');
        btn.setAttribute('title', 'Toggle theme');
        btn.innerHTML = '<span class="theme-icon" aria-hidden="true">🌙</span>';
        return btn;
      }

      function setTheme(light) {
        document.body.classList.toggle(BODY_CLASS, light);
        document.querySelectorAll('.theme-toggle .theme-icon').forEach((icon) => {
          icon.textContent = light ? '☀️' : '🌙';
        });
        try {
          localStorage.setItem(STORAGE_KEY, light ? 'light' : 'dark');
        } catch (e) {}
      }

      function init() {
        const saved = (() => {
          try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
        })();
        const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        const shouldLight = saved ? saved === 'light' : prefersLight;
        setTheme(shouldLight);

        const toggle = createToggleButton();
        toggle.addEventListener('click', function () {
          setTheme(!document.body.classList.contains(BODY_CLASS));
        });

        const navActions = getNavActions();
        if (navActions && !navActions.querySelector('.theme-toggle')) {
          navActions.appendChild(toggle.cloneNode(true));
          const navToggle = navActions.querySelector('.theme-toggle:last-child');
          navToggle.addEventListener('click', function () {
            setTheme(!document.body.classList.contains(BODY_CLASS));
          });
        }

        const mobileMenu = getMobileMenu();
        if (mobileMenu && !mobileMenu.querySelector('.theme-toggle')) {
          const mobileToggle = toggle.cloneNode(true);
          mobileToggle.style.marginTop = '8px';
          mobileMenu.appendChild(mobileToggle);
          mobileToggle.addEventListener('click', function () {
            setTheme(!document.body.classList.contains(BODY_CLASS));
          });
        }
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    })();

var names = ["WhatsApp","Instagram","Facebook","TikTok","Telegram","Discord","OpenAI","Anthropic","Gemini","Grok","DeepSeek","Kimi","ElevenLabs","Groq","HeyGen"];
var track = document.getElementById('marquee');
var html = "";
for (var r = 0; r < 2; r++) {
  names.forEach(function(n){ html += "<span>" + n + "</span>"; });
}
track.innerHTML = html;