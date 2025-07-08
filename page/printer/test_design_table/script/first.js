let firstTable = document.getElementById('firstTable');

let firstTbody = document.createElement('tbody');

for(i=0;i<firstData.length;i++){
    firstTbody.innerHTML += `
        <tr>
            <td>${firstData[i][6]}</td>
            <td align="right">${firstData[i][0]}</td>
            <td align="right">${firstData[i][1]}</td>
            <td align="right">${firstData[i][2]}</td>
            <td align="right">${firstData[i][3]}</td>
            <td align="right">${firstData[i][4]}</td>
            <td>${dateConverter(firstData[i][5])}</td>
        </tr>
`};

firstTable.appendChild(firstTbody);



let Table_1_head = document.getElementById('firstTable_head');

Table_1_head.innerHTML += `
        <tr>
            <th align="left" >Total</th>
            <th align="right">${sumMoney(0)}</th>
            <th align="right">${sumMoney(1)}</th>
            <th align="right">${sumMoney(2)}</th>
            <th align="right">${1}</th>
            <th align="right">${1}</th>
            <th align="left" ></th>
        </tr>
`;

// сумма
function sumMoney(n) {
    let u = 0;
    for(a=0;a<firstData.length;a++){
        u += firstData[a][n];
    };
    return u.toFixed(2);
}