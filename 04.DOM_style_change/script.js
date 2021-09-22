document.querySelector('#btn1').onclick = btn1;
document.querySelector('#btn2').onclick = btn2;

function btn1() {
    document.querySelector('link').href = 'style2.css';
}

function btn2() {
    document.querySelector('link').href = 'style1.css';
}