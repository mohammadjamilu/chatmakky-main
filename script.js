(function () {
      const themeToggle = document.querySelector('.theme-toggle');
      const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
      const menuToggle = document.querySelector('.menu-toggle');
      const menu = document.getElementById('mobile-menu');
      const closeBtn = menu ? menu.querySelector('.mm-close') : null;

      const applyTheme = (theme) => {
        const isLight = theme === 'light';
        document.body.classList.toggle('theme-light', isLight);
        if (themeIcon) {
          themeIcon.className = isLight ? 'fa-solid fa-sun' : 'fa-regular fa-moon';
        }
        if (themeToggle) {
          themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
          themeToggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
        }
        try {
          localStorage.setItem('chatmakky-theme', theme);
        } catch (e) {}
      };

      const getInitialTheme = () => {
        try {
          const saved = localStorage.getItem('chatmakky-theme');
          if (saved === 'light' || saved === 'dark') return saved;
        } catch (e) {}
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      };

      applyTheme(getInitialTheme());

      if (themeToggle) {
        const toggleTheme = function (e) {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          const nextTheme = document.body.classList.contains('theme-light') ? 'dark' : 'light';
          applyTheme(nextTheme);
        };
        themeToggle.addEventListener('click', toggleTheme);
        themeToggle.addEventListener('touchend', toggleTheme, { passive: false });
      }

      if (menuToggle && menu) {
        const setOpen = (open) => {
          menu.classList.toggle('open', open);
          menu.setAttribute('aria-hidden', open ? 'false' : 'true');
          menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
          document.body.style.overflow = open ? 'hidden' : '';
        };

        setOpen(false);

        menuToggle.addEventListener('click', function (e) {
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
      }
    })();

var names = ["WhatsApp","Instagram","Facebook","TikTok","Telegram","Discord","OpenAI","Anthropic","Gemini","Grok","DeepSeek","Kimi","ElevenLabs","Groq","HeyGen"];
var track = document.getElementById('marquee');
var html = "";
for (var r = 0; r < 2; r++) {
  names.forEach(function(n){ html += "<span>" + n + "</span>"; });
}
track.innerHTML = html;