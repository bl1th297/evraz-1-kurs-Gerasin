let result = document.getElementById("result");
let input1 = document.getElementById("inp1");
let a = "Стивен Хокинг"
let b = "Линус Тордвальс"
let c = "Билл Гейтс"
let d = "Илон Маск"
let answer = ''

function checkInput() {


    if (input1.value === a) {
        answer = "Стивен Хокинг - британский физик-теоретик, космолог, астрофизик и писатель. Директор по научной работе Центра теоретической космологии Кембриджского университета"
    } else if (input1.value === b) {
        answer = "Линус Тордвальс - финно-американский программист. Создатель ядра Linux"
    } else if (input1.value === c) {
        answer = "Билл Гейтс - американский предприниматель и общественный деятель, филантроп, один из создателей и бывший крупнейший акционер компании Microsoft"
    } else if (input1.value === d) {
        answer = "Илон Маск - американский предприниматель, инженер и миллиардер. Основатель, генеральный директор и главный инженер компании SpaceX; инвестор, "
    } else {
        answer = "хз"
    }
}
result.innerText = answer
