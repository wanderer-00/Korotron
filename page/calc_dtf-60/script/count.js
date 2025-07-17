var inputCount = document.getElementById('count');

function plus() {
    inputCount.value = parseInt(inputCount.value) + 1;
    calc();
};

function minus() {
    if(inputCount.value == 1){
        alert('😡');
    } else {
        inputCount.value -= 1
    }
    calc();
};