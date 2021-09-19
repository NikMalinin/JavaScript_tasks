let p = document.querySelectorAll('p');

document.querySelector('#black').onclick = function () {
    for (i = 0; i < p.length; i++) {
        p[i].style.color = 'black';
    }
}
document.querySelector('#green').onclick = function () {
    for (i = 0; i < p.length; i++) {
        p[i].style.color = 'green';
    }
}
document.querySelector('#red').onclick = function () {
    for (i = 0; i < p.length; i++) {
        p[i].style.color = 'red';
    }
}