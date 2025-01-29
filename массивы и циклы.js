//let i = 4;

//function addLi() {
//    let addElement = document.getElementById('add');
//    let liElement = document.createElement('li');
//    liElement.innerText = i;
//    addElement.append(liElement);
//    i = i + 1;
//}

//let i = 5;

//function addLi() {
//function addLi()     let addElement = document.getElementById('add');
//    let addElement = document.getElementById('add')    let liElement = document.createElement('li');
//    let input = document.getElementById('name'
//    let liElement = document.createElement('li')    liElement.innerText = i;
//
//    if (input.value === '')     if (i % 2 === 0) {
//        alert('Добавь значение'        liElement.classList.add('chet')    }
//        else {
//    else         liElement.classList.add('nechet')    }
//        liElement.innerText = input.value
//           addElement.append(liElement);
//        if (+input.value % 2 === 0)     i = i + 1;
//            liElement.classList.add('chet'}
//function addLi() {
//    let addElement = document.getElementById('add');
//    let input = document.getElementById('name')
//    let liElement = document.createElement('li');
//
//    if (input.value === '') {
//        alert('Добавь значение')
//    }
//    else {
//        liElement.innerText = input.value;
//
//        if (+input.value % 2 === 0) {
//            liElement.classList.add('chet')
//        }
//        else {
//            liElement.classList.add('nechet')
//        }
//
//        addElement.append(liElement);
//
//        input.value = '';
//    }
//}
function addLi() {
    let addElement = document.getElementById('add');
    let input = document.getElementById('inp1')
    let liElement = document.createElement('li');

    if (input.value === '') {
        alert('Добавь значение')
    }
    else {
        liElement.innerText = input.value;
        liElement.classList.add('green');
        addElement.append(liElement);

        input.value = '';
    }
}

function addLi2() {
    let addElement2 = document.getElementById('add2');
    let input = document.getElementById('inp2');
    let liElement = document.createElement('li');

    if (input.value === '') {
        alert('Добавь город')
    }

    else {
        liElement.innerText = input.value;
        liElement.classList.add('red');
        addElement2.append(liElement);

        input.value = '';
    }
}