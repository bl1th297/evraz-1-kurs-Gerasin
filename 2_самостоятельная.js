function MakeWhite(){
    let element = document.getElementById("body");
    element.style.backgroundColor = "black"; // Изменяем цвет фона
    element.style.color = "white"; // Изменяем цвет текста
}

function MakeBlack() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "white"; // Изменяем цвет фона
    element.style.color = "black"; // Изменяем цвет текста
}
function MakeGreen() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "green"; // Изменяем цвет фона
    element.style.color = "black"; // Изменяем цвет текста
}
function MakeGold() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "Gold"; // Изменяем цвет фона
    element.style.color = "black"; // Изменяем цвет текста
}

function MakeBlue() {
    let element = document.getElementById("body");
    element.style.backgroundColor = "blue"; // Изменяем цвет фона
    element.style.color = "greenyellow"; // Изменяем цвет текста
}
let a = 0
function min10() {
    a = +a - 10
    result.innerText = a
    if (a % 2 === 0) {
        answer = 'Введённое число чётное'
    } else {
    answer = 'Введённое число нечётное'

result.innerText = answer
}




}
function min1() {
    a = +a - 1
    result.innerText = a

    answer = 'Введённое число чётное'
}
    function plus1() {
        a = +a + 1
        result.innerText = a
        if (a % 2 === 0)
        answer = 'Введённое число чётное'
    else{
        {
            answer = 'Введённое число нечётное'
        }
        result.innerText = answer
    }

}
    function plus10() {
    a = +a + 10
        result.innerText = a
    }
    if (a % 2 === 0) {
        answer = 'Введённое число чётное'
    } else {
        answer = 'Введённое число нечётное'
        result.innerText = answer
    }




