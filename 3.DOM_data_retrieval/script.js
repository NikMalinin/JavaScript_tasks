document.querySelector('#btn').onclick = function () {
    console.log(document.querySelector('.input-text').value);
    console.log(document.querySelector('.input-pass').value);
    console.log(document.querySelector('.input-range').value);
    console.log(document.querySelector('.input-date').value);
    console.log(document.querySelector('.input-color').value);
    console.log(document.querySelector('#input-checkbox').value);

    let radiooo = document.querySelectorAll('.input-radio');
    for (i = 0; i < radiooo.length; i++) {
        if (radiooo[i].checked) {
            console.log(radiooo[i].value);
        }
    }
}