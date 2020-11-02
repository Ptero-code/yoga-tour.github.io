// переменная для кнопки меню
let menuBar = document.querySelector('#menu-bar');
// переменная в которой меню
let menu = document.querySelector('.sidebar');
// отслеживание клика и запуск функции
menuBar.addEventListener('click', function (event) {
    // отменяем стандарт поведение ссылки
    event.preventDefault();
    // вешаем класс на меню когда кликаем на кнопку
    menu.classList.toggle('visible');
})