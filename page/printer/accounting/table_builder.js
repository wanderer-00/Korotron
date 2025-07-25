let wrapper = document.getElementById("wrapper");



// создание 1-ой таблицы
let table1 = document.getElementById('table1');
table1.innerHTML += `
    <tbody>
        <tr>
            <td align="center">${tableData[0][0]}</td>
            <td>${tableData[0][1]}</td>
            <td>${tableData[0][2]}</td>
            <td align="center">${dateConverter(tableData[0][3])}</td>
        </tr>
    </tbody>`;



// создание 2-ой таблицы
let table2 = document.getElementById('table2');
let tbody = document.createElement("tbody");
for (i = 0; i < tableData[1].length; i++) {
    tbody.innerHTML += `
    <tr>
        <td align="center">${i+1}</td><td>${tableData[1][i][0]}</td>
        <td align="center">${tableData[1][i][1]}</td>
        <td align="center">${tableData[1][i][2]}</td>
        <td class="nowrap" align="right">${tableData[1][i][3]}</td>
    </tr>`;
};
table2.appendChild(tbody);

table2.innerHTML += `
    <tfoot>
        <tr>
            <td align="right" colspan="4"><b>Итог:</b></td>
            <td align="right" class="nowrap"><b>${finalPrice(tableData[1].length)}</b></td>
        </tr>
    </tfoot>`;

wrapper.appendChild(table2);



// расчёт финальной суммы заказа
function finalPrice(quantity) {
    let sum = 0;
    for (a = 0; a < quantity; a++) {sum += tableData[1][a][3]};
    return sum.toFixed(2);
};