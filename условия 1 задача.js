let result = document.getElementById('total');
let number = 0;
let number1 = 0;


function MakeBlack() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "black"; // Изменяем цвет фона
    element.style.color = "white"; // Изменяем цвет текста
}

function MakeWhite() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "white"; // Изменяем цвет фона
    element.style.color = "black"; // Изменяем цвет текста
}

function MakeBlue() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "blue"; // Изменяем цвет фона
    element.style.color = "white"; // Изменяем цвет текста
}

function MakeGreen() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "green"; // Изменяем цвет фона
    element.style.color = "white"; // Изменяем цвет текста
}

function MakeRed() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "red"; // Изменяем цвет фона
    element.style.color = "black"; // Изменяем цвет текста
}

function MakeGold() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "gold"; // Изменяем цвет фона
    element.style.color = "black"; // Изменяем цвет текста
}

function function1() {
    number = 0
    MakeBlack()
    result.innerText = number
}

function function2() {
    number = 1
    MakeWhite()
    result.innerText = number
}

function function3() {
    number = 2
    MakeBlue()
    result.innerText = number
}

function function4() {
    number = 5
    MakeGreen()
    result.innerText = number
}

function function5() {
    number = number + 1
    result.innerText = number

    if (number === 0) {
        MakeBlack()
    } else if (number === 1) {
        MakeWhite()
    } else if (number === 2) {
        MakeBlue()
    } else if (number === 5) {
        MakeGreen()
    } else if (number % 2 === 0) {
        MakeRed();
    } else {
        MakeGold();
    }
}

function function6() {
    number = number - 1
    result.innerText = number

    if (number === 0) {
        MakeBlack()
    } else if (number === 1) {
        MakeWhite()
    } else if (number === 2) {
        MakeBlue()
    } else if (number === 5) {
        MakeGreen()
    } else if (number % 2 === 0) {
        MakeRed();
    } else {
        MakeGold();
    }
}
