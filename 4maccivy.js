function addLi() {
     let addDiv = document.getElementById("adddiv");

    if (addDiv) {
        for (let i = 0; i < 5; i += 1) {
            const span = document.createElement("span");
            span.innerText = i + ' ';
            span.classList.add("number"); // Добавляем класс
            addDiv.appendChild(span);
        }
    }
}

function addLi2() {
   let  addDiv = document.getElementById("adddiv2");

    if (addDiv) {
        for (let i = 1; i < 5; i+=1) {
            const span = document.createElement("span");
            span.InnerText = i + ' ';
            span.classList.add("number"); // Добавляем класс
            addDiv.appendChild(span);
        }
    }
}

function addLi3() {
    let addDiv = document.getElementById("adddiv3");

    if (addDiv) {
        for (let i = 0; i < 10; i+=1) {
            const span = document.createElement("span");
            span.InnerText = i + ' ';
            span.classList.add("number"); // Добавляем класс
            addDiv.appendChild(span);
        }
    }
}

function addLi4() {
   let  addDiv = document.getElementById("adddiv4");

    if (addDiv) {
        for (let i = 1; i < 10; i+=1) {
            const span = document.createElement("span");
            span.InnerText = i + ' ';
            span.classList.add("number"); // Добавляем класс
            addDiv.appendChild(span);
        }
    }
}

function addLi5() {
    let addDiv = document.getElementById("adddiv5");

    if (addDiv) {
        for (let i = 0; i < 10; i += 2) {
            const span = document.createElement("span");
            span.InnerText = i + ' ';
            span.classList.add("number"); // Добавляем класс
            addDiv.appendChild(span);
        }
    }
}

function addLi6() {
   let  addDiv = document.getElementById("adddiv6");

    if (addDiv) {
        for (let i = 1; i < 10; i += 2) {
            const span = document.createElement("span");
            span.InnerText = i+ ' ';
            span.classList.add("number"); // Добавляем класс
            addDiv.appendChild(span);
        }
    }
}

function addLi7() {
   let  addDiv = document.getElementById("adddiv7");


    if (addDiv) {
        for (let i = 0; i < 20; i += 1) {
            const span = document.createElement("span");
            span.InnerText = i;
            span.classList.add("number"); // Добавляем класс
            addDiv.appendChild(span);
            if (+i % 2 === 0) ;
            span.classlist.add(red)
        }
    }
}