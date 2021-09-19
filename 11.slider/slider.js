document.querySelector('.rules').onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = '-250px';
}

document.querySelectorAll('.rules-beack').forEach(function (element) {
    element.onclick = function () {
        document.querySelector('.form-slider').style.marginLeft = '0px';
    }
});