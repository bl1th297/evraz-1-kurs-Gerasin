// your code goes here
let result = document.getElementById('res');
let result1 = document.getElementById('output');
let result2 = document.getElementById('output1');
let a = 0;
let b = 0;
const left_border = 6
const Right_border = 810
const Hieght_border = 70
const Down_border = 574
//правый верхний угол дива
// let divx1  = 810
// const divy1 = 70
// //правый нижний угол(x - не изм)
// const divy2 = 460
// //левый нижний угол(y = y2)
// const divx3 = 6
// //левый верхний угол(x - не изм)
// const divy = 70
function get_element() {
    let element = null
    if (b === 1){
        element = document.getElementById("rect1");
    }
    else if(b === 2){
        element = document.getElementById("rect2");
    }
    else if(b === 3){
        element = document.getElementById("rect3");
    }
    return element;
}
function ch1(){
    a = +a + 1;
    result.innerText = a;
}
function ch2(){
    a = +a + 5;
    result.innerText = a;
}
function ch3(){
    a = +a + 10;
    result.innerText = a;
}
function ch4(){
    a = +a + 50;
    result.innerText = a;
}
function ch5(){
    if (+a > 0){
        a = +a - 1;
        result.innerText = a;}
    else {
        a = o;
        result.innerText = a;
    }
}
function ch6(){
    if (+a > 4){
        a = +a - 5;
        result.innerText = a;}
    else {
        a = o;
        result.innerText = a;
    }
}
function ch7(){
    if (+a > 9){
        a = +a - 10;
        result.innerText = a;}
    else {
        a = o;
        result.innerText = a;
    }
}
function ch8(){
    if (+a > 49){
        a = +a - 50;
        result.innerText = a;}
    else {
        a = o;
        result.innerText = a;
    }
}
function moveRightRect(element) {
    let currentLeft= parseInt(window.getComputedStyle(element).left, 10) || 0;
    element.style.left = (currentLeft + a) + "px";
}
function moveLeftRect(element) {
    let currentLeft= parseInt(window.getComputedStyle(element).left, 10) || 0;
    if (currentLeft - a < left_border) {
        element.style.left = left_border + "px";
    } else {
        element.style.left = (currentLeft - a) + "px";
    }
}
function moveHeight1() {
    let element = document.getElementById("rect1");
    let currentTop = parseInt(window.getComputedStyle(element).top, 10) || 0;
    element.style.top = (currentTop - a) + "px";
}
function moveHeight2() {
    let element = document.getElementById("rect2");
    let currentTop = parseInt(window.getComputedStyle(element).top, 10) || 0;
    element.style.top = (currentTop - a) + "px";
}
function moveHeight3() {
    let element = document.getElementById("rect3");
    let currentTop = parseInt(window.getComputedStyle(element).top, 10) || 0;
    element.style.top = (currentTop - a) + "px";
}
function moveDown1() {
    let element = document.getElementById("rect1");
    let currentTop = parseInt(window.getComputedStyle(element).top, 10) || 0;
    element.style.top =  (currentTop + a) + "px";
}
function moveDown2() {
    let element = document.getElementById("rect2");
    let currentTop = parseInt(window.getComputedStyle(element).top, 10) || 0;
    element.style.top =  (currentTop + a) + "px";
}
function moveDown3() {
    let element = document.getElementById("rect3");
    let currentTop = parseInt(window.getComputedStyle(element).top, 10) || 0;
    element.style.top =  (currentTop + a) + "px";
}
function moveDown(){
    if (b === 1){
        moveDown1();
        getPoint();
    }
    else if(b === 2){
        moveDown2()
        getPoint1()
    }
    else if(b === 3){
        moveDown3();
        getPoint2();
    }
    else{
        GetControlValue();
    }
}
function moveHeight(){
    if (b === 1){
        moveHeight1();
        getPoint();
    }
    else if(b === 2){
        moveHeight2()
        getPoint1()
    }
    else if(b === 3){
        moveHeight3();
        getPoint2();
    }
    else{
        GetControlValue();
    }
}
function changeBorderColor1() {
    b = 1
    document.getElementById("ch1").style.backgroundColor ="gold";
    document.getElementById("ch2").style.backgroundColor ="gold";
    document.getElementById("ch3").style.backgroundColor ="gold";
    document.getElementById("ch4").style.backgroundColor ="gold";
    document.getElementById("ch5").style.backgroundColor ="gold";
    document.getElementById("ch6").style.backgroundColor ="gold";
    document.getElementById("ch7").style.backgroundColor ="gold";
    document.getElementById("ch8").style.backgroundColor ="gold";
    document.getElementById("r").style.backgroundColor ="gold";
    document.getElementById("r1").style.backgroundColor ="gold";
    document.getElementById("r2").style.backgroundColor ="gold";
    document.getElementById("r3").style.backgroundColor ="gold";
    document.getElementById("rect1").style.border ="3px solid OrangeRed";
    document.getElementById("rect2").style.border ="0px solid gold";
    document.getElementById("rect3").style.border ="0px solid gold";
}
function changeBorderColor2() {
    b = 2
    document.getElementById("ch1").style.backgroundColor ="SkyBlue";
    document.getElementById("ch2").style.backgroundColor ="SkyBlue";
    document.getElementById("ch3").style.backgroundColor ="SkyBlue";
    document.getElementById("ch4").style.backgroundColor ="SkyBlue";
    document.getElementById("ch5").style.backgroundColor ="SkyBlue";
    document.getElementById("ch6").style.backgroundColor ="SkyBlue";
    document.getElementById("ch7").style.backgroundColor ="SkyBlue";
    document.getElementById("ch8").style.backgroundColor ="SkyBlue";
    document.getElementById("r").style.backgroundColor ="SkyBlue";
    document.getElementById("r1").style.backgroundColor ="SkyBlue";
    document.getElementById("r2").style.backgroundColor ="SkyBlue";
    document.getElementById("r3").style.backgroundColor ="SkyBlue";
    document.getElementById("rect2").style.border ="4px solid MediumBlue";
    document.getElementById("rect1").style.border ="0px solid gold";
    document.getElementById("rect3").style.border ="0px solid gold";
}
function changeBorderColor3() {
    b = 3
    document.getElementById("ch1").style.backgroundColor ="DarkOrange";
    document.getElementById("ch2").style.backgroundColor ="DarkOrange";
    document.getElementById("ch3").style.backgroundColor ="DarkOrange";
    document.getElementById("ch4").style.backgroundColor ="DarkOrange";
    document.getElementById("ch5").style.backgroundColor ="DarkOrange";
    document.getElementById("ch6").style.backgroundColor ="DarkOrange";
    document.getElementById("ch7").style.backgroundColor ="DarkOrange";
    document.getElementById("ch8").style.backgroundColor ="DarkOrange";
    document.getElementById("r").style.backgroundColor ="DarkOrange";
    document.getElementById("r1").style.backgroundColor ="DarkOrange";
    document.getElementById("r2").style.backgroundColor ="DarkOrange";
    document.getElementById("r3").style.backgroundColor ="DarkOrange";
    document.getElementById("rect3").style.border ="4px solid Olive";
    document.getElementById("rect2").style.border ="0px solid gold";
    document.getElementById("rect1").style.border ="0px solid gold";
}
function GetControlValue()
{
    alert(document.all.txtUser.Value);
}
function moveRight(){
    let element = get_element()
    if (element) {
        moveRightRect(element);
        getPoint();
        CheckRight(element)
    }
    else {
        GetControlValue();
    }
}
function moveLeft(){
    let element = get_element()
    if (element) {
        moveLeftRect(element);
        getPoint();
        checkLeft(element);
    }
    else {
        GetControlValue();
    }
}
function extraClear(){
    location.reload(true);
}
function getPoint() {
    // инфа rect1 на оси x
    let img = document.getElementById("rect1");
    // Получаем координаты с использованием getBoundingClientRect()
    let rect = img.getBoundingClientRect();
    // Координаты относительно окна браузера
    let r1x = rect.left;
    let r1y = rect.top;
    // кордината нижнего левого угла
    // let r1x2 = r1x + 150
    // let r1y2 = r1y + 150
    // //координата верхнего левого угла(y - не изм)
    // let r1x3 = r1x + 150
    // //координата правого нижнего угал(x - не изм)
    // let r1y4 = r1y + 150
    // // Выводим координаты на страницу
    document.getElementById("info1").innerText = ` X = ${r1x}, Y = ${r1y}`;
}
function getPoint1() {
    // инфа rect1 на оси
    let img = document.getElementById("rect2");
    // Получаем координаты с использованием getBoundingClientRect()
    let rect = img.getBoundingClientRect();
    // Координаты относительно окна браузера
    let r2x = rect.left;
    let r2y = rect.top;
    // кордината нижнего левого угла
    // let r2x2 = r2x + 150
    // let r2y2 = r2y + 150
    // //координата верхнего левого угла(y - не изм)
    // let r2x3 = r2x + 150
    // //координата правого нижнего угал(x - не изм)
    // let r2y4 = r2y + 150
    // // Выводим координаты на страницу
    // // Выводим координаты на страницу
    document.getElementById("info2").innerText = ` X = ${r2x}, Y = ${r2y}`;
}
function getPoint2() {
    // инфа rect1 на оси
    let img = document.getElementById("rect3");
    // Получаем координаты с использованием getBoundingClientRect()
    let rect = img.getBoundingClientRect();
    // Координаты относительно окна браузера
    let r3x = rect.left;
    let r3y = rect.top;
    document.getElementById("info3").innerText = ` X = ${r3x}, Y = ${r3y}`;
}
function checkLeft(element) {
    let rect = element.getBoundingClientRect();
    // Координаты относительно окна браузера
    let r1x = rect.left;
    if(r1x === left_border) {
        element.style.backgroundColor ="blue";
    }
}
function CheckRight(element){
    if (r1y + 150 > 460){
        document.getElementById("rect1").style.backgroundColor ="blue";
    }
    else if (r2y + 150 > 460){
        document.getElementById("rect2").style.backgroundColor ="blue";
    }
    else if (r3y + 150 > 460){
        document.getElementById("rect3").style.backgroundColor ="blue";
    }
}