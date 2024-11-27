function moveText() {
    var inputText = document.getElementById('input').value;
    document.getElementById('rectangle').innerText = inputText;
    document.getElementById('input').value = '';
}