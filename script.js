(function () {
      const toggle = document.querySelector('.menu-toggle');
      const menu = document.getElementById('mobile-menu');
      if (!toggle || !menu) return;

      const setOpen = (open) => {
        menu.classList.toggle('open', open);
        menu.setAttribute('aria-hidden', open ? 'false' : 'true');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      };

      setOpen(false);

      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = menu.classList.contains('open');
        setOpen(!isOpen);
      });

      document.addEventListener('click', function (e) {
        if (menu.classList.contains('open') && !menu.contains(e.target) && !toggle.contains(e.target)) {
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