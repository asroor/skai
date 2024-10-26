"use strict";
const vacanciContainers = document.querySelectorAll('.vacanci-container');
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach((button) => {
    button.addEventListener('click', () => {
        tabBtns.forEach((button) => {
            button.classList.remove('active');
        });
        button.classList.add('active');
    });
});
function toggleVacanci(n) {
    vacanciContainers.forEach((item) => {
        let itemAttr = item.getAttribute('vacanci-data');
        if (n == Number(itemAttr)) {
            vacanciContainers.forEach((item) => {
                item.classList.remove('active');
            });
            item.classList.add('active');
        }
    });
}
const header = document.querySelector('.header-wrapper');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 10) {
        header.style.backgroundColor = '#fff';
    }
    else {
        header.style.background = 'linear-gradient(90deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.60) 100%)';
    }
});
