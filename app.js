let modalTop = document.getElementById('modal-top');
let modalRight = document.getElementById('modal-right');
let modalLeft = document.getElementById('modal-left');
let modalBottom = document.getElementById('modal-bottom');
let modalCenter = document.getElementById('modal-center');
let modalBottomRight = document.getElementById('modal-bottom-right');
let modalBottomLeft = document.getElementById('modal-bottom-left');
let modalLightbox = document.getElementById('modal-lightbox');
let modalAll = document.getElementById('modal-all');

modalTop.addEventListener('click', function () {
    document.querySelector('#top-modal').style.display = 'flex';
});

modalRight.addEventListener('click', function () {
    document.querySelector('#right-modal').style.display = 'flex';
});

modalLeft.addEventListener('click', function () {
    document.querySelector('#left-modal').style.display = 'flex';
});

modalBottom.addEventListener('click', function () {
    document.querySelector('#bottom-modal').style.display = 'flex';
});

modalCenter.addEventListener('click', function () {
    document.querySelector('#center-modal').style.display = 'flex';
});

modalBottomRight.addEventListener('click', function () {
    document.querySelector('#bottom-right-modal').style.display = 'flex';
});

modalBottomLeft.addEventListener('click', function () {
    document.querySelector('#left-modal').style.display = 'flex';
});

modalLightbox.addEventListener('click', function () {
    document.querySelector('#left-modal').style.display = 'flex';
});

modalAll.addEventListener('click', function () {
    document.querySelector('#left-modal').style.display = 'flex';
});