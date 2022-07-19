function menuShow() {
    let menuMoblie = document.querySelector('.mobile-menu');
    if (menuMoblie.classList.contains('open')) {
        menuMoblie.classList.remove('open');
        document.querySelector('.icon').src = "./assets/img/menu_white_36dp.svg";
    } else {
        menuMoblie.classList.add('open');
        document.querySelector('.icon').src = "./assets/img/close_white_36dp.svg";
    }
}