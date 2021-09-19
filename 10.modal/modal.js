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
        if (event.keyCode == 27) {
            console.log('lol');
            closeModal();
        }
        document.onkeydown = null
    }
}

function closeModal() {
    modal.classList.add('hide');
}

