let tabBody = document.querySelectorAll('.tab-body');
for (let i = 1; i < tabBody.length; i++) {
    tabBody[i].style.display = 'none';
}

let tab = document.querySelectorAll('.tab');
tab.forEach(function (element) {
    element.onclick = function () {
        let data = this.getAttribute('data');
        tabBody.forEach(function (element) {
            element.style.display = 'none';
        });
        document.querySelector(`.tab-body[data = "${data}"]`).style.display = 'block';
    }
})