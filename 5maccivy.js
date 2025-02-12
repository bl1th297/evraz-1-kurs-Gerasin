
let list = [];

// функция добавления значения из инпута в массив и див
function add() {
    let addDiv = document.getElementById('ad');
    let input = document.getElementById('aa');

    // добавить значение в конец массива list
    list.push(input.value)

    console.log('длина массива', list.length);
    console.log(list);

    addDiv.innerText = list;
}

// функция добавления значения из инпута в массив и див
function add2() {
    let ol = document.getElementById('tt');
    let input = document.getElementById('aa');

    // добавить значение в конец массива list
    list.push(input.value)

    console.log('длина массива', list.length);
    console.log(list);

    let liElement = document.createElement('li');
    liElement.innerText = input.value;
    ol.append(liElement)
}

function addList() {
    let ol = document.getElementById('tt');
    // цикл для вывода всех значений
    for (let i = 0; i < list.length; i++) {
        let liElement = document.createElement('li');
        liElement.innerText = list[i];
        ol.append(liElement)
    }
}