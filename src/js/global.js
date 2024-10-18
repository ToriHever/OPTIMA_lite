console.log('Работает?')
const sandwichmenu = document.querySelector('#sandwichmenu');
const js_menu = document.querySelector('#js_menu');

sandwichmenu.addEventListener('click', function(e) {
  e.preventDefault();
  js_menu.classList.toggle('active');
});
