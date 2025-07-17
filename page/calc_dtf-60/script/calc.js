// множитель маштаба предпроссмотра
const factor = 2;

const maxWidth = 580;
const maxHeight = 50000;

const count = document.getElementById('count');
const width = document.getElementById('width');
const height = document.getElementById('height');


// расчёт
function calc() {
    let valueCount = count.value;
    let valueWidth = width.value;
    let valueHeight = height.value;
    
    console.log(valueWidth, 'x', valueHeight, 'mm');
    console.log(valueCount, 'шт.');
    
    builder(valueCount, valueWidth, valueHeight);
    
    log(valueCount, valueWidth, valueHeight);
};

var preview = document.getElementById('preview');



function builder(c, w, h){
    preview.innerHTML = '';
    for(i=0; i<c; i++) {
        preview.innerHTML += `<div style="width: ${w/2}px; height: ${h/2}px"></div>`
    }
};


// результаты
function log (c, w, h){
    const result = document.getElementById('result');

    result.innerHTML = `
кол-во: ${c} + 10%
размер: ${w}x${h} mm
длина плёнки: ${preview.offsetHeight*factor} mm
скорость работы принтера: 1000 mm/hour
время печати: `;
};