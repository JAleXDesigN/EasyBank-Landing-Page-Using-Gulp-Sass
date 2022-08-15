const overlay = document.querySelector('.overlay');
const ham = document.querySelector('.ham');
const barras = document.querySelectorAll('.ham span');

const menu = document.querySelector('.menu');

eventListeners();

function eventListeners() {
    ham.addEventListener('click', openMenu);
    document.addEventListener('scroll', hiddenMenu);
}

function openMenu() {
    menu.classList.toggle('open');
    barras.forEach(child => {
        child.classList.toggle('animado');
    })
    if (menu.classList.contains('open')) {
        overlay.classList.add('menu-open');
    } else {
        overlay.classList.remove('menu-open');
    }
}

function hiddenMenu() {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        overlay.classList.remove('menu-open');
        barras.forEach(child => {
            child.classList.remove('animado');
        })
    }
}