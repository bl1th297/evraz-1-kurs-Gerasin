function addLi() {
    let addElement = document.getElementById('add');
    let inputName = document.getElementById('inp1')
    let inputCount = document.getElementById('inp3')
    let liElement = document.createElement('li');

    if (inputName.value === '') {
        alert('Добавь имя')
    }
    else {
        if (inputCount.value === '') {
            alert('Добавь количество повторов имен')
        }
        else {
            for (let i = 0; i < +inputCount.value; i++) {
                let liElement = document.createElement('li');
                liElement.innerText = inputName.value;
                liElement.classList.add('green');
                addElement.append(liElement);
            }

            inputName.value = '';
            inputCount.value = '';
        }
    }
}

function addLi2() {
    let addElement = document.getElementById('add2');
    let inputCity = document.getElementById('inp2')
    let inputCount = document.getElementById('inp4')
    let liElement = document.createElement('li');

    if (inputCity.value === '') {
        alert('Добавь город')
    }
    else {
        if (inputCount.value === '') {
            alert('Добавь количество повторов городов')
        }
        else {
            for (let i = 0; i < +inputCount.value; i++) {
                let liElement = document.createElement('li');
                liElement.innerText = inputCity.value;
                liElement.classList.add('red');
                addElement.append(liElement);
            }

            inputCity.value = '';
            inputCount.value = '';
        }
    }
}























