//1
function number1() {
    let mas = [15, 'hello', 'trump', 23, 'world', 999, 176];
    let x = document.querySelector('.number1');
    for (let i = 0; i < mas.length; i++) {
        x.innerHTML += i + " --- " + mas[i] + '<br>';
    }
}
number1();

//2
function number2() {
    let mas = [2, 3, 4, 5, 6, 4, 77, 32, 4];
    let x = document.querySelector('.number2');
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] > 5) {
            x.innerHTML += i + " --- " + mas[i] + '<br>';
        }
    }
}
number2();

//3
function number3() {
    let day = {
        "d1": "Понедельник",
        "d2": "Вторник",
        "d3": "Среда",
        "d4": "Четверг"
    };

    let x = document.querySelector('.number3');
    for (let i in day) {
        x.innerHTML += i + " : " + day[i] + '<br>';
    }
}
number3();

//4
function number4() {
    let goods = {
        "dd": {
            "name": "Яблоки",
            "cost": 13
        },
        "dc": {
            "name": "Груши",
            "cost": 23
        },
        "cd": {
            "name": "Абрикосы",
            "cost": 33
        },
        "dee": {
            "name": "Сливы",
            "cost": 43
        },
        "dd2": {
            "name": "Вишни",
            "cost": 19
        },
    };

    let x = document.querySelector('.number4');
    for (let i in goods) {
        if (goods[i].cost > 20) {
            x.innerHTML += i + '<br>'
        }
    }
}
number4();

//5
function number5() {
    document.querySelectorAll('button').forEach(function (but) {
        but.onclick = function () {
            console.log(but.dataset.num);
        }
    });
}
number5();

//6
function number6() {
    document.querySelectorAll('img').forEach(function (toy) {
        toy.onclick = function () {
            console.log(this.src);
        }
    });
}
number6();

//7
function number7() {
    let item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = '<h3>Заголовок</h3> <p>текст текст текст</p>';
    let container = document.querySelector('#container');
    document.querySelector('.inp7').onclick = function () {
        container.appendChild(item);
    }
}
number7();

//8
function number8() {
    document.querySelector('.btn8').onclick = function () {
        alert('Привет');
    }
}
number8();

//9
function number9() {
    document.querySelector('.btn9').onclick = function () {
        document.querySelector('.inp9').value = "!!!";
    }
}
number9();

//10
function number10() {
    let inp = document.querySelector('.inp10');
    document.querySelector('.btn10').onclick = function () {
        alert(inp.value);
    }
}
number10();

//11
function number11() {
    let inp = document.querySelector('.inp11');
    document.querySelector('.btn11').onclick = function () {
        if (isNaN(inp.value * inp.value)) {
            alert('Введите число');
        } else {
            alert(inp.value * inp.value);
        }
    }
}
number11();

//12
function number12() {
    let btn = document.querySelector('.btn12');
    btn.onclick = function () {
        btn.innerHTML = 'catch';
    }
}
number12();

//13
function number13() {
    document.querySelector('.btn13').onclick = function () {
        document.querySelector('.text').style.color = 'crimson';
    }
}
number13();

//14
function number14() {
    let btn = document.querySelector('.btn14');
    let clicks = 0;
    btn.onclick = function () {
        clicks++;
        btn.innerHTML = clicks;
    }
}
number14();

//15
function number15() {
    let btn = document.querySelector('.btn15');
    let www = document.querySelectorAll('.www');
    btn.onclick = function () {
        for (let i = 0; i <= www.length; i++) {
            www[i + 1].innerHTML = i;
        }
    }
}
number15();