let number = 0
function function1() {
    number = 0
    if (number == '0'){
        MakeBlack()
    }
}
function function2() {
    number = 1
    if (number == '1') {
        MakeWhite()
    }
}
function function3() {
    number = 2
    if (number == '2') {
        MakeBlue()
    }
}
function function4() {
    number = 5
    if (number == '5') {
        MakeRed()
    }
}
function function5() {
    number = number + 1
    if (number !== '0') {
        MakeRed();
    }
    else{
        MakeGold();
    }
}
function function6() {
    number = number - 1
    if (number !== '0') {
        MakeGold();
    }
        else{
        MakeRed();
    }
}
function MakeBlack(){
    backgroundcolor = 'black';
    let element = document.getElementById("body");
    element.style.backgroundColor = "black"; // Изменяем цвет фона
    element.style.color = "white"; // Изменяем цвет текста
}
function MakeWhite(){
    backgroundcolor = 'white';
    let element = document.getElementById("body");
    element.style.backgroundColor = "white"; // Изменяем цвет фона
    element.style.color = "black"; // Изменяем цвет текста
}
function MakeBlue(){
    backgroundcolor = 'blue';
    let  element = document.getElementById("body");
    element.style.backgroundColor = "blue"; // Изменяем цвет фона
    element.style.color = "white"; // Изменяем цвет текста
}
function MakeGreen(){
    backgroundcolor = 'green';
    let  element = document.getElementById("body");
    element.style.backgroundColor = "green"; // Изменяем цвет фона
    element.style.color = "white"; // Изменяем цвет текста
}
function MakeRed(){
    backgroundcolor = 'red';
    let  element = document.getElementById("body");
    element.style.backgroundColor = "red"; // Изменяем цвет фона
    element.style.color = "black"; // Изменяем цвет текста
}
function MakeGold() {
    backgroundcolor = 'gold';
    let element = document.getElementById("body");
    element.style.backgroundColor = "gold"; // Изменяем цвет фона
    element.style.color = "black"; // Изменяем цвет текста
}
function innerText (){

}
