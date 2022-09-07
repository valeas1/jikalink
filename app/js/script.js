
let btnOpen = document.querySelector('.header__burger');
let btnClose = document.querySelector('.header__main-cross');
let menuSite = document.querySelector('.header__main');
let body = document.querySelector('body');

btnOpen.addEventListener('click', menuOpen);
btnClose.addEventListener('click', menuOpen);


function menuOpen () {
    menuSite.classList.toggle('is-hidden');
    body.classList.toggle('no-scroll');
};
(() => {
    let btnOpenModal = document.querySelector('.hero__btn');
    let btnCloseModal = document.querySelector('.modal__main-cross')
    let modal = document.querySelector('.modal');
    if(!modal) return;
    btnOpenModal.addEventListener('click', openModal);
    btnCloseModal.addEventListener('click', openModal);

    function openModal () {
            modal.classList.toggle('is-hidden');
            body.classList.toggle('no-scroll');
}
})();