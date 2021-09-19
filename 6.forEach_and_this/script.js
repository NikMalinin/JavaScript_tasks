let blocks = document.querySelectorAll('.block');

// Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве

blocks.forEach(function (element) {
    element.onclick = function () {
        element.style.background = '#F07427';
    }
})


/* Или можно так (this дает возможность внутри функции обращаться к элементу и работать с ним)

for (let i = 0; i < blocks.length; i++) {
    blocks[i].onclick = function () {
        this.style.background = '#F07427';
    }
}
*/


/* Или так (привычный способ)

for (let i = 0; i < blocks.length; i++) {
    blocks[i].onclick = function () {
        blocks[i].style.background = '#F07427';
    }
}
*/
