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

        if (input.value === '' || isNaN(count) || count < 1) {
            alert('Убедитесь, что значение названия не пустое и количество больше 0');
        }
        else {
            for (let i = 0; i < count; i++) {
                let liElement = document.createElement('li');
                liElement.innerText = input.value;
                liElement.classList.add('green');
                addElement.append(liElement);
            }
            input.value = '';
            document.getElementById('count').value = '';

        }


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
























