let block = document.querySelector('.block');
let show = document.querySelector('#show');
let hidden = document.querySelector('#hidden');

function showBlock() {
    block.style.display = 'block'
    block.style.borderRadius = '20px'
    block.style.border = '5px'
}
show.onclick = showBlock;

function hiddenBlock() {
    block.style.display = 'none'
}
hidden.onclick = hiddenBlock;
