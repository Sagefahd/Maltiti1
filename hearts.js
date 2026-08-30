(function () {
  const container = document.querySelector('.hearts');
  if (!container) return;
  const symbols = ['💗', '💕', '💖', '💘', '❤️'];
  const count = 18;
  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.className = 'heart';
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.animationDuration = 6 + Math.random() * 8 + 's';
    span.style.animationDelay = Math.random() * 10 + 's';
    span.style.fontSize = 14 + Math.random() * 18 + 'px';
    container.appendChild(span);
  }
})();
