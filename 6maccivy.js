let list = [];

// функция добавления значения из инпута в массив и див
function add2() {
    let input = document.getElementById('aa');
    let ol = document.getElementById('tt');
    let liElement = document.createElement('li');
    // добавить значение в конец массива list
    list.push(input.value)
    liElement.innerText = input.value;

    console.log('длина массива', list.length);
    console.log(list);


    ol.append(liElement)

}

function add3() {
    let input = document.getElementById('BMW');
    let ul = document.getElementById('gg');
    let liElement = document.createElement('li');
    // добавить значение в конец массива list

    if (input.value === '') {
        alert('Введите значение')
        return;
    }

    if (list.length === 0) {
        alert('Ты гонишь, такого значения нет')
        return;
    }

    list.push(input.value)
    liElement.innerText = input.value;

    console.log('длина массива', list.length);
    console.log(list);


    ul.append(liElement)
}

