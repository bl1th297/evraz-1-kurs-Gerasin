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