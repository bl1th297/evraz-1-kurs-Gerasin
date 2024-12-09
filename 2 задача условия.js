

function checkInput() {
    let span = document.getElementById('input');
    let input = document.getElementById('input1').value;
    input = +input;

    if (input%2 !== 0) {
        span.innerText = 'Введённое число чётное'
    }
    else {
        (input%2 !== 1)
        span.innerText = 'Введённое число нечётное'
    }
}