(function () {
      const toggle = document.querySelector('.menu-toggle');
      const menu = document.getElementById('mobile-menu');
      if (!toggle || !menu) return;

      const setOpen = (open) => {
        menu.classList.toggle('open', open);
        menu.setAttribute('aria-hidden', open ? 'false' : 'true');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.textContent = open ? '✕' : '☰';
        document.body.style.overflow = open ? 'hidden' : '';
      };

      setOpen(false);

      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = menu.classList.contains('open');
        setOpen(!isOpen);
      });

      menu.addEventListener('click', function (e) {
        if (e.target === menu) {
          setOpen(false);
        }
      });

      menu.querySelectorAll('.mm-row').forEach(function (btn) {
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

var names = ["WhatsApp","Instagram","Facebook","TikTok","Telegram","Discord","OpenAI","Anthropic","Gemini","Grok","DeepSeek","Kimi","ElevenLabs","Groq","HeyGen"];
var track = document.getElementById('marquee');
var html = "";
for (var r = 0; r < 2; r++) {
  names.forEach(function(n){ html += "<span>" + n + "</span>"; });
}
track.innerHTML = html;