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

(function(){
  var items = [
    {name:"WhatsApp",   cls:"brand-whatsapp",  icon:"fa-brands fa-whatsapp"},
    {name:"Instagram",  cls:"brand-instagram", icon:"fa-brands fa-instagram"},
    {name:"Facebook",   cls:"brand-facebook",  icon:"fa-brands fa-facebook-f"},
    {name:"TikTok",     cls:"brand-tiktok",    icon:"fa-brands fa-tiktok"},
    {name:"Telegram",   cls:"brand-telegram",  icon:"fa-brands fa-telegram"},
    {name:"Discord",    cls:"brand-discord",   icon:"fa-brands fa-discord"},
    {name:"X",          cls:"brand-x",         icon:"fa-brands fa-x-twitter"},
    {name:"ChatGPT",    img:"https://paymegpt.com/api/landing-pages/images/landing-page-images%2F0%2F1786345238154_preview-2-removebg-preview.png"},
    {name:"Claude",     img:"https://paymegpt.com/api/landing-pages/images/landing-page-images%2F0%2F1786345252621_preview-3-removebg-preview.png"},
    {name:"Gemini",     img:"https://paymegpt.com/api/landing-pages/images/landing-page-images%2F0%2F1786345264502_preview-4-removebg-preview.png"},
    {name:"DeepSeek",   img:"https://paymegpt.com/api/landing-pages/images/landing-page-images%2F0%2F1786345105593_preview-6-removebg-preview.png"},
    {name:"Groq",       img:"https://paymegpt.com/api/landing-pages/images/landing-page-images%2F0%2F1786345307904_preview-5.webp"},
    {name:"ElevenLabs", img:"https://paymegpt.com/api/landing-pages/images/landing-page-images%2F0%2F1786345321007_preview-8.webp"},
    {name:"Grok",       icon:"fa-solid fa-bolt", bg:"#0B0B12"},
    {name:"HeyGen",     icon:"fa-solid fa-clapperboard", bg:"linear-gradient(135deg,#7C3AED,#4F46E5)"}
  ];

  var stage = document.getElementById('logoCycle');
  if (!stage) return;

  var n = items.length;
  var perItem = 2.2;                 // seconds each logo "owns" the stage
  var total = n * perItem;           // full loop length, shared by every item
  var slot = 100 / n;                // % of the loop each item gets
  var fadeInPct = (slot * 0.22).toFixed(3);
  var holdEndPct = (slot * 0.82).toFixed(3);
  var slotEndPct = slot.toFixed(3);

  var html = "";
  items.forEach(function(it, i){
    var badgeInner = it.img
      ? '<img src="' + it.img + '" alt="' + it.name + '" loading="lazy">'
      : '<i class="' + it.icon + '"></i>';
    var badgeStyle = it.img
      ? 'background:#fff; padding:6px;'
      : (it.bg ? 'background:' + it.bg + ';' : '');
    var delay = -(i * perItem); // negative delay staggers each item into its own slot of the shared loop
    html +=
      '<div class="logo-cycle-item" style="animation:lcCycle ' + total.toFixed(3) + 's ease-in-out infinite; animation-delay:' + delay.toFixed(3) + 's;">' +
        '<span class="lc-badge ' + (it.cls || '') + '" style="' + badgeStyle + '">' + badgeInner + '</span>' +
        '<span class="lc-name">' + it.name + '</span>' +
      '</div>';
  });
  stage.innerHTML = html;

  var styleTag = document.createElement('style');
  styleTag.textContent =
    '@keyframes lcCycle{' +
      '0%{opacity:0; transform:translateY(8px) scale(0.94);}' +
      fadeInPct + '%{opacity:1; transform:translateY(0) scale(1);}' +
      holdEndPct + '%{opacity:1; transform:translateY(0) scale(1);}' +
      slotEndPct + '%{opacity:0; transform:translateY(-8px) scale(0.94);}' +
      '100%{opacity:0;}' +
    '}';
  document.head.appendChild(styleTag);
})();