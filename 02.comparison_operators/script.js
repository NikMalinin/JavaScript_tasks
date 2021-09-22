let r = Math.round(Math.random() * 10);
console.log(r);
let num = document.querySelector('#num');
document.querySelector('#btn').onclick = checkNum;

function checkNum() {
    let userNum = num.value;
    userNum = parseInt(userNum);

    if (isNaN(userNum)) {
        alert('Введите корректное число');
    } else if (userNum == r) {
        alert('Вы выйграли!!!');
        location.reload();
    } else {
        alert('Пробуйте снова');
    }
}