(function () {
      const toggle = document.querySelector('.menu-toggle');
      const menu = document.getElementById('mobile-menu');
      if (!toggle || !menu) return;

      const setOpen = (open) => {
        menu.classList.toggle('open', open);
        menu.setAttribute('aria-hidden', open ? 'false' : 'true');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        menu.style.display = open ? 'flex' : 'none';
        if (open) {
          menu.style.flexDirection = 'column';
          menu.style.gap = '8px';
        }
      };

      setOpen(false);

      toggle.addEventListener('click', () => {
        const isOpen = menu.classList.contains('open');
        setOpen(!isOpen);
      });
    })();

var names = ["WhatsApp","Instagram","Facebook","TikTok","Telegram","Discord","OpenAI","Anthropic","Gemini","Grok","DeepSeek","Kimi","ElevenLabs","Groq","HeyGen"];
  var track = document.getElementById('marquee');
  var html = "";
  for (var r = 0; r < 2; r++) {
    names.forEach(function(n){ html += "<span>" + n + "</span>"; });
  }
  track.innerHTML = html;

  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle) {
    toggle.addEventListener('click', function(){
      var open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.cssText += open ? '' : 'position:absolute; top:74px; left:0; right:0; flex-direction:column; background:rgba(10,10,31,0.98); padding:16px; border-bottom:1px solid var(--line);';
    });
  }