//let a = 1;
// let b = "sadasdfs";
// let c = true;
//let d = null;
//let t = a;
//let r = a + t;
//console.log('Здесь я проверяю значения в своих данных');
// console.log(r);
// // console.log(r, a, t, d);
// let hello = 'Привет, ';
// let name = 'Павел';
// // let st = hello + name;
// // console.log(st);
// console.log(hello + name);
//
// console.log(a);
// a = a + a;
// a = a + a;
// console.log(a);

//let span = document.getElementById('answer');
//span.innerText = 5;

//вывод сообщения
//alert('HELLO WORLD')
//prompt ('Укажите ваше имя') окно для ввода данных
//let name = promt ('Укажите своё имя')
//console.log(Stepan);
//confirm - кно для выбора ответа
//let result=confirm('Мы изучаем js?')
//console.log(result)
//преобразовать строку в число - number(...) или +переменная
//let a = prompt('Укажите первое слагемое')
// let b = prompt('Укажите второе слагаемое')
//console.log('Cуммa',a+b);
//a =+a
let name =   prompt('Укажите ваше имя');
let nameDOM = document.getElementById('name');
nameDOM.innerText = name;
let surname = prompt('Укажите вашу Фамилию')
let surname2DOM = document.getElementById('lastname');
surname2DOM.innerText = surname;
let middlename = prompt ('Укажите ваше Отчество')
let middlenameDOM = document.getElementById('middlename');
middlenameDOM.innerText = middlename;
let age = prompt ('Укажите ваш возраст')
let ageDOM = document.getElementById('age');
ageDOM.innerText = age;
let school = prompt ('Укажите номер школы')
let schoolDOM = document.getElementById('school');
schoolDOM.innerText = school;
let sport = prompt ('Укажите ваш любимый спорт')
let sportDOM = document.getElementById('sport');
sportDOM.innerText = sport;
let subject = prompt ('Укажите ваш любимый предмет')
let subjectDOM = document.getElementById('subject');
subjectDOM.innerText = subject;
let color = prompt ('Укажите цвет')
let colorDOM = document.getElementById('color');
colorDOM.innerText = color;
let class23 = prompt('Укажите ваше имя')
let classDOM = document.getElementById('class');
classDOM.innerText = class23;
function clearDiv () {
    let div = document.getElementById('clear');
    div.innerText = ''
}