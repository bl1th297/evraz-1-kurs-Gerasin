let list = []

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
function add7(){
    let input = document.getElementById('bebra');
    let input1 =document.getElementById('aboba');
    let ol = document.getElementById('tt');


    if (input.value === ' ') {
        alert('Введите значение')
        return;
    }

    if (input1.value === ' ') {
        alert('Ты гонишь')
        return;
    }

    list[input.value] = input1.value;
    ol.innerText = '';

    for(let i = 0;i < list.length; i++) {
        let liElement = document.createElement('li');
        liElement.innerText = list[i];
        ol.append(liElement)
    }
    console.log('длина массива', list.length);
    console.log(list);







}