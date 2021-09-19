// Запрет на ввод всего кроме маленьких букв (латин.)
document.querySelector('#test').onkeypress = function (e) {
    if (e.keyCode < 97 || e.keyCode > 122) {
        console.log('not');
        return false;
    } else {
        console.log(e.keyCode);
    }
}







/*
Событие onkeypress срабатывает, когда клавиша на клавиатуре нажата и отпущена, что эквивалентно совместному действию onkeydown и onkeyup.

document.onkeypress = function () {
    console.log("keypress");
}


Событие onkeydown cрабатывает в момент нажатия клавиши, но когда она еще не отпущена.

document.onkeydown = function () {
    console.log("keydown");
}


Событие onkeyup возникает в момент отпускания нажатой клавиши.

document.onkeyup = function () {
    console.log("keyup");
}
*/