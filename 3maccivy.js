
window.onload = function () {
    let square1 = 0
    let square2 = 0
    let square3 = 0
    let input = 0
    while (true) {
        input = prompt("Введите число 1-красный 2-синий 3-зелёный введите 4 для завершения");

        if (input === null) {
            // Если пользователь закрыл окно ввода
            break;
        }

        if (!isNaN(input)) {
            input = Number(input);
            if (input == 1) {
                square1 += 1;
                alert("Текущее значение 1: " + square1);
            }
            else if (input == 2) {
                square2 += 1
                alert("Текущее значение 2: " + square2);
            }
            else if (input == 3) {
                square3 += 1
                alert("Текущее значение 3: " + square3);
            }
            else if (input === 4) {
                for (let i = 0; i < square1; i++) {
                    let square = document.createElement("span");
                    square.className = "square1";
                    container.appendChild(square);
                }
                for (let i = 0; i < square2; i++) {
                    let square = document.createElement("span");
                    square.className = "square2";
                    container.appendChild(square);
                }
                for (let i = 0; i < square3; i++) {
                    let square = document.createElement("span");
                    square.className = "square3";
                    container.appendChild(square);
                }
                let result = square1 + square2 + square3
                break; // Завершение цикла
            }
        }
    }
}