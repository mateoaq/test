const theme = document.getElementById('theme');
const body = document.getElementById('body');
theme.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
  } else {
    body.classList.add('dark');
  }
});
