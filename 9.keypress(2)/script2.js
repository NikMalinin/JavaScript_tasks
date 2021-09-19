let left = 0;
let t = 0;
document.onkeypress = function (e) {
    let block = document.querySelector('.block');
    if (e.keyCode == 100) {
        left += 10;
        block.style.marginLeft = left + 'px';
        if (left > 450) {
            left = 0;
        }
    } else if (e.keyCode == 97) {
        left -= 10;
        block.style.marginLeft = left + 'px';
        if (left < 0) {
            left = 450;
        }
    }

    if (e.keyCode == 115) {
        t += 10;
        block.style.marginTop = t + 'px';
        if (t > 450) {
            t = 0;
        }
    } else if (e.keyCode == 119) {
        t -= 10;
        block.style.marginTop = t + 'px';
        if (t < 0) {
            t = 450;
        }
    }
}
