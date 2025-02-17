let list = [];

// функция добавления значения из инпута в массив и див
function add2() {
    let addDiv = document.getElementById('ad');
    let input = document.getElementById('aa');

    // добавить значение в конец массива list
    list.push(input.value)

    console.log('длина массива', list.length);
    console.log(list);

    addDiv.innerText = list;
}


function addList() {
    let ol = document.getElementById('tt');
    let liElement = document.getElementById('aa');

    for (let i = 0; i < list.length; i++) {
        let liElement = document.createElement('li');
        liElement.innerText = list[i];
        console.log(list[i])

        ol.append(liElement)
    }
}


function Liadd1() {
    let ul = document.getElementById('gg');
    let liElement = document.getElementById('aa');

    for (let i = 0; i < list.length; i++) {

        let liElement = document.createElement('li');
        liElement.innerText = list[i];

        ul.append(liElement)
    }
}

function const234() {

        console.log('вызываем очистку дива');
        // получаем див для очистки
        let clear = document.getElementById('ad');
        // чистим всё то, что внутри
        clear.innerText = '';


}