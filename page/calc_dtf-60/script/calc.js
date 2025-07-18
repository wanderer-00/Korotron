// % приладок от общего тиража (1=100%)
const spare = 0.1;

// скорость печати принтера (mm/minute)
const printSpeed = 50;

// множитель маштаба предпроссмотра
const factor = 1;

// ограничения полотна (mm)
const maxWidth = 580;
const maxHeight = 100000;

// получение input
const count = document.getElementById('count');
const width = document.getElementById('width');
const height = document.getElementById('height');




// расчёт
function calc() {
    // получение значений из полей
    let valueCount = count.value;
    let valueWidth = width.value;
    let valueHeight = height.value;
    
    let countPluseSpare = Math.ceil(valueCount) + Math.ceil(valueCount*0.1);
    
    // построение preview
    builder(countPluseSpare, valueWidth, valueHeight);
    // построение log
    log(countPluseSpare, valueWidth, valueHeight);
};


// построение preview
var preview = document.getElementById('preview');
function builder(c, w, h){
    preview.innerHTML = '';
    for(i=0; i<c; i++) {
        preview.innerHTML += 
        `<div style="
            width: ${w/factor}px;
            height: ${h/factor}px"
        ></div>`
    }
};


// расчёт логов
function log (c, w, h){
    const result = document.getElementById('result');

    console.log(`кол-во: ${c}`);
    console.log(`размер: ${w}x${h} mm`);
    console.log(`длина печати: ${unitСonversion_length(preview.offsetHeight*factor)}`);
    console.log(`скорость принтера: ${printSpeed} mm/hour`);
    console.log(`время печати: ${unitСonversion_time(preview.offsetHeight*factor / printSpeed)}`);
    
    result.innerHTML = `
    <svg><use href="#obj"></use></svg>
    <div>${c} шт. (с учётом приладок (+10%))</div>
    <svg><use href="#hourglass"></use></svg>
    <div>${unitСonversion_time(preview.offsetHeight*factor / printSpeed)}</div>
    `;
    let printTime = document.getElementById('printTime');
    printTime.innerHTML = unitСonversion_time(preview.offsetHeight*factor / printSpeed);
};


// преобразование едениц mm -> sm -> m -> km
function unitСonversion_length(length){
    if(length=>1000){
        return `${length/1000} m`
    } else if(length=>10) {
        return `${length/10} sm`
    } else {
        return `${length} mm`
    }
}


// преобразование едениц min -> hour
// ПРОИНСПЕКТИРОВАТЬ hour ЧЕРЕЗ alert
function unitСonversion_time(time){
    if( time < 60 ){
        return `${Math.ceil(time)} minute`
    } else {
        let hour = 0;
        while ( time >= 60 ){
            time = time - 60;
            hour++;
        };
        return `${hour} hour ${Math.ceil(time % 60)} minute`;
    }
}


count.addEventListener('input', function(event) {
  console.log('Новое значение:', event.target.value);
  calc();
});

width.addEventListener('input', function(event) {
  console.log('Новое значение:', event.target.value);
  calc();
});

height.addEventListener('input', function(event) {
  console.log('Новое значение:', event.target.value);
  calc();
});

       
// первичная инициализация
calc();