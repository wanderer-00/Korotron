// input
var inputCount = document.getElementById('count');
// кнопка уменьшения значения
var buttonMinus = document.getElementById('buttonMinus');
// кнопка увеличения значения
var buttonPluse = document.getElementById('buttonPluse');

function plus() {
    inputCount.value = parseInt(inputCount.value) + 1;
    buttonMinus.removeAttribute("disabled");
    calc();
};

function minus() {
    if(inputCount.value == 1){
        buttonMinus.setAttribute("disabled", "true");
    } else {
        inputCount.value -= 1
    }
    calc();
};