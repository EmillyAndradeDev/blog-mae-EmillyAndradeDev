// dark-mode.js

document.addEventListener('DOMContentLoaded', () => {
  // Cria o botão
  const btn = document.createElement('button');
  btn.id = 'toggle-theme';
  btn.classList.add('toggle-theme-btn'); // adiciona classe para estilizar via CSS
  btn.textContent = 'Modo Noturno';

  // Adiciona o botão no body
  document.body.appendChild(btn);

  // Evento para alternar o modo noturno
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btn.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Noturno';
  });
});
