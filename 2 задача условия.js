let result = document.getElementById('input');
let input = document.getElementById('input1');
let answer = '';

function checkInput() {
    if (input.value % 2 === 0) {
        answer = 'Введённое число чётное'
    } else {
        answer = 'Введённое число нечётное'
    }
    result.innerText = answer
}