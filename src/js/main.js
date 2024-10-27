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
const uploadFile = document.getElementById('uploadFile');
const uploadFileNames = document.querySelector('.upload-file-names');
uploadFile.addEventListener('change', () => {
    if (uploadFile.files && uploadFile.files.length > 0) {
        Array.from(uploadFile.files).forEach((file) => {
            const fileName = document.createElement('div');
            fileName.classList.add('file');
            fileName.innerHTML = `
            <span class="file-name">${file.name}</span>
            <img src="images/cancel-file.svg" alt="cancel" width="10" height="10" id="remove-file">
        `;
            uploadFileNames === null || uploadFileNames === void 0 ? void 0 : uploadFileNames.insertBefore(fileName, uploadFileNames.firstChild);
            const cancelBtn = fileName.querySelector('#remove-file');
            cancelBtn.addEventListener('click', () => {
                fileName.remove();
            });
        });
    }
});
const body = document.querySelector('body');
const bars = document.querySelector('.bars');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelectorAll('.close-btn');
const closeBg = document.querySelector('.close-bg');
bars.addEventListener('click', () => {
    sidebar.classList.add('open');
    closeBg.classList.add('show');
    body.classList.add('fixet');
});
closeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        sidebar.classList.remove('open');
        closeBg.classList.remove('show');
        body.classList.remove('fixet');
    });
});
