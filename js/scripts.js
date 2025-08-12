const posts = [
  {
    id: 1,
    title: "Primeira noite 📖",
    date: "2025-06-15",
    theme: "eu",
    summary: "Hoje nasce esse espaço.",
  },
  {
    id: 2,
    title: "Silêncio sagrado e morangos proibidos",
    date: "2025-06-14",
    theme: "yuri",
    summary: "... a dicção não colaborou. A idade não ajudou. E a acústica da igreja... ah, essa foi impecável."
  },
  {
    id: 3,
    title: "Eu, mãe. E o resto a gente vai vendo",
    date: "2025-06-16",
    theme: "eu",
    summary: "...te lembrar um dia - que não sou tudo. Mas sou muita coisa. Que não dou conta de tudo, mas dou conta de você."
  }
];

const postsList = document.getElementById('posts-list');
const filterMonth = document.getElementById('filter-month');
const filterTheme = document.getElementById('filter-theme');
const toggleThemeBtn = document.getElementById('toggle-theme');

function renderPosts() {
  const month = filterMonth.value;
  const theme = filterTheme.value;

  const filtered = posts.filter(post => {
    const matchMonth = month === 'all' || post.date.startsWith(month);
    const matchTheme = theme === 'all' || post.theme === theme;
    return matchMonth && matchTheme;
  });

  // Ordena por data decrescente (mais recente primeiro)
  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  postsList.innerHTML = '';

  if (filtered.length === 0) {
    postsList.innerHTML = '<p>Nenhuma carta encontrada para esses filtros.</p>';
    return;
  }

  filtered.forEach(post => {
    // Formata o ID para dois dígitos (01, 02, ...)
    const formattedId = String(post.id).padStart(2, '0');

    const postEl = document.createElement('article');
    postEl.classList.add('post');

    postEl.innerHTML = `
      <h2><a href="posts/post-${formattedId}.html">${post.title}</a></h2>
      <div class="date">${formatDate(post.date)}</div>
      <div class="summary">${post.summary}</div>
    `;

    postsList.appendChild(postEl);
  });
}

function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString('pt-BR', options);
}

filterMonth.addEventListener('change', renderPosts);
filterTheme.addEventListener('change', renderPosts);


toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleThemeBtn.textContent = 'Modo Claro';
  } else {
    toggleThemeBtn.textContent = 'Modo Noturno';
  }
});


renderPosts();
