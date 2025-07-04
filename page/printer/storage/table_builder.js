let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");
let table3 = document.getElementById("table3");



// создание 1-ой таблицы
let table1_tbody = document.createElement("tbody");
table1_tbody.innerHTML = `
        <tr>
            <td>Иванов Иван Иванович</td>
            <td>г. XXXXXXX-XXXXXX, п-т XXXXXXX, д. XXX</td>
            <td>8(XXX)-XXX-XX-XX</td>
            <td>Дата доставки клиенту</td>
            <td rowspan="2">Тип доставки кол-во дней</td>
        </tr>
        <tr>
            <td>Кол-во мест, шт.</td>
            <td></td>
            <td>Объём, м<sup>3</sup>.</td>
            <td></td>
        </tr>
`;
table1.appendChild(table1_tbody);



// создание 2-ой таблицы
let table2_tbody = document.createElement("tbody");
table2_tbody.innerHTML = `
        <tr>
            <td>XXXXXX</td>
            <td>Название организации</td>
            <td>Название организации</td>
            <td>dd.mm.yyyy</td>
            <td>dd.mm.yyyy</td>
        </tr>`;
table2.appendChild(table2_tbody);



// создание 3-ей таблицы
let table3_tbody = document.createElement("tbody");
table3_tbody.innerHTML = `
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
        </tr>`;
table3.appendChild(table3_tbody);