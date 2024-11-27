function clearDiv() {
    console.log('вызываем очистку дива');
    let div = document.getElementById('clear');
    div.innerText = '';
}
function result() {
    let input = document.getElementById('d1');
    let span = document.getElementById('span1');
    span.innerText = span.innerText + input.value;
    input.value = '';
}

// let a = 1
// console.log(a)
// a = a + 1
// console.log(a)
// a = a + 1
// console.log(a)
function f12() {
    let input = document.getElementById('d2');
    let span = document.getElementById('span2');
    span.innerText = span.innerText + input.value;
    input.value = '';
}
function f11() {
    let input = document.getElementById('d3');
    let span = document.getElementById('span3');
    span.innerText = span.innerText + input.value;
    input.value = '';
}