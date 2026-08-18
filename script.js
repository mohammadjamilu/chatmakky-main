!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2501386813634781');
fbq('track', 'PageView');

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

        const handleMenuToggle = function (e) {
          e.preventDefault();
          e.stopPropagation();
          const isOpen = menu.classList.contains('open');
          setOpen(!isOpen);
          menuToggle.setAttribute('aria-expanded', (!isOpen).toString());
        };

        menuToggle.addEventListener('click', handleMenuToggle);
        menuToggle.addEventListener('touchstart', handleMenuToggle, { passive: false });

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