let modal = document.querySelector('.modal-wrap');
let btnShow = document.querySelector('.modal-show');
let btnClose = document.querySelector('.modal-close');

btnShow.onclick = showModal;
btnClose.onclick = closeModal;

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

function showModal() {
    modal.classList.remove('hide');
    document.onkeydown = function (event) {
        // В случае нажатия клавиши Esc
        if (event.keyCode == 27) {
            closeModal();
        }
    }
}

function closeModal() {
    modal.classList.add('hide');
}

