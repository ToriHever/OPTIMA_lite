function updateFavicon() {
    const favicon = document.getElementById('favicon');
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    favicon.href = isDarkMode ? '/src/assets/img/logo/logo-mini-darck.png' : '/src/assets/img/logo/logo-mini-light.png';
}

// Устанавливаем favicon при загрузке страницы
updateFavicon();

// Отслеживаем изменения в системе
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);


console.log('Работает?')
const sandwichmenu = document.querySelector('#sandwichmenu');
const js_menu = document.querySelector('#js_menu');

sandwichmenu.addEventListener('click', function(e) {
  e.preventDefault();
  js_menu.classList.toggle('active');
});
