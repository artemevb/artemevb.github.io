//Позволяет открыть меню нажатием на 'гамбургер'
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

//Позволяет закрыть меню при нажатии на крестик
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

//Позволяет закрыть меню клавишей Escape
window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
                menu.classList.remove('active');
    }
});

const counters = document.querySelectorAll('.steck__ratings-counter'),
    lines = document.querySelectorAll('.steck__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});