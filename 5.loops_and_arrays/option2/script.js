let p = document.querySelectorAll('p');
let opt = document.querySelectorAll('#my-select option');

document.querySelector('#push').onclick = function () {
    for (i = 0; i < opt.length; i++) {
        if (opt[0].selected) {
            for (j = 0; j < p.length; j++) {
                p[j].style.color = '#000';
            }
        }
        else if (opt[1].selected) {
            for (j = 0; j < p.length; j++) {
                p[j].style.color = '#318CE7';
            }
        }
        else if (opt[2].selected) {
            for (j = 0; j < p.length; j++) {
                p[j].style.color = '#50C878';
            }
        }
        else {
            for (j = 0; j < p.length; j++) {
                p[i].style.color = '#CC397B';
            }
        }
    }

}