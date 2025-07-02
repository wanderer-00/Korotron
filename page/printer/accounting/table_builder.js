let wrapper = document.getElementById("wrapper");

// создание 1-ой таблицы
let table1 = document.createElement("table");
table1.classList.add("table");
table1.innerHTML = `
    <caption>Заявка на документы для бухгалтерии</caption>
    <thead>
        <tr>
            <th>№ заказа</th>
            <th>Клиент</th>
            <th>Плательщик</th>
            <th>Дата отгрузки</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">${tableData[0][0]}</td>
            <td>${tableData[0][1]}</td>
            <td>${tableData[0][2]}</td>
            <td align="center">${tableData[0][3]}</td>
        </tr>
    </tbody>`;
wrapper.appendChild(table1);

// создание 2-ой таблицы
let table2 = document.createElement("table");
table2.classList.add("table");
table2.innerHTML = `
    <caption>ЭДО</caption>
    <thead>
        <tr>
            <th>№</th>
            <th>Наименование</th>
            <th>Артикул</th>
            <th>Тираж</th>
            <th>Стоимость, руб.</th>
        </tr>
    </thead>`;
table2.innerHTML += `
    <tfoot>
        <tr>
            <td align="right" colspan="4"><b>Итог:</b></td>
            <td align="right" class="nowrap"><b>${finalPrice(tableData[1].length)}</b></td>
        </tr>
    </tfoot>`;
let tbody = document.createElement("tbody");
for(i=0; i<tableData[1].length; i++){
tbody.innerHTML += `
    <tr>
        <td>${i+1}</td>
        <td>${tableData[1][i][0]}</td>
        <td>${tableData[1][i][1]}</td>
        <td>${tableData[1][i][2]}</td>
        <td class="nowrap">${tableData[1][i][3]}</td>
    </tr>`;
};
table2.appendChild(tbody);
wrapper.appendChild(table2);

function finalPrice(quantity) {
    let sum = 0;
    for(a=0; a<quantity; a++){
        sum += tableData[1][a][3];
    };
    return sum.toFixed(2);
}