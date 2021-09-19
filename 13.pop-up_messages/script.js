document.querySelector('.btn').onclick = function () {
    chips('hallo');
}

function chips(message, timeremove = 3000) {
    // создаем div
    let chips = document.createElement('div');
    // даем ему class
    chips.classList.add('chips');
    // вставляем сообщение
    chips.innerHTML = message;
    addChips(chips);
    // интервал перед удалением
    setInterval(function () { deleteChips(chips) }, timeremove)
}

function deleteChips(chips) {
    chips.remove();
    let allChips = document.querySelectorAll('.chips-field .chips');
    if (allChips.length == 0) document.querySelector('.chips-field').remove();
}

function addChips(chips) {
    let chipsField = document.querySelector('.chips-field');
    if (chipsField) {
        chipsField.appendChild(chips);
    } else {
        let chipsField = document.createElement('div');
        chipsField.classList.add('chips-field');
        document.querySelector('body').appendChild(chipsField);
        chipsField.appendChild(chips);
    }
}