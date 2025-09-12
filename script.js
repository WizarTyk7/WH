// ===== Estrelas de fundo =====
const stars = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.left = Math.random() * 100 + 'vw';
  s.style.top = Math.random() * 100 + 'vh';
  s.style.animationDelay = (Math.random() * 4) + 's';
  s.style.opacity = (0.2 + Math.random() * 0.8).toFixed(2);
  stars.appendChild(s);
}

// ===== Corações flutuantes ocasionais =====
const hearts = document.getElementById('hearts');
function spawnHeart() {
  const h = document.createElement('div');
  h.className = 'heart';
  const hue = Math.random() > 0.5 ? 'var(--rose)' : 'var(--violet)';
  h.style.background = hue;
  h.style.left = Math.random() * 100 + 'vw';
  h.style.bottom = '-10px';
  const dur = 6 + Math.random() * 6;
  h.style.animationDuration = dur + 's';
  h.style.filter = 'blur(' + (Math.random()*0.6) + 'px)';
  hearts.appendChild(h);
  setTimeout(() => h.remove(), dur * 1000);
}
setInterval(spawnHeart, 1200);

// ===== Dias juntos (desde 13/09/2024) =====
const inicio = new Date('2024-09-13T00:00:00');
function diasDesde(d) {
  const hoje = new Date();
  const diff = hoje - d;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
document.getElementById('diasJuntos').textContent = diasDesde(inicio);

// ===== Confetes simples =====
function confete(x, y) {
  const piece = document.createElement('div');
  piece.style.position = 'fixed';
  piece.style.left = x + 'px';
  piece.style.top = y + 'px';
  piece.style.width = '8px';
  piece.style.height = '14px';
  piece.style.background = `hsl(${Math.floor(Math.random()*360)}, 90%, 65%)`;
  piece.style.transform = 'rotate(' + (Math.random()*360) + 'deg)';
  piece.style.zIndex = 50;
  piece.style.borderRadius = '2px';
  piece.style.opacity = '0.9';
  document.body.appendChild(piece);
  const dx = (Math.random() - 0.5) * 6;
  const dy = (Math.random() * 6) + 4;
  let frames = 0;
  const drop = setInterval(() => {
    frames++;
    piece.style.top = (parseFloat(piece.style.top) + dy) + 'px';
    piece.style.left = (parseFloat(piece.style.left) + dx) + 'px';
    piece.style.opacity = String(Math.max(0, 0.9 - frames/60));
    if (frames > 60) { clearInterval(drop); piece.remove(); }
  }, 16);
}

document.getElementById('btnConfete').addEventListener('click', (e) => {
  const rect = e.target.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top + rect.height/2;
  for (let i = 0; i < 120; i++) { confete(cx, cy); }
});