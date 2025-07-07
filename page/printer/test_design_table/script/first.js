let firstTable = document.getElementById('firstTable');

let firstTbody = document.createElement('tbody');

for(i=0;i<firstData.length;i++){
    firstTbody.innerHTML += `
        <tr>
            <td>${firstData[i][6]}</td>
            <td>${firstData[i][0]}</td>
            <td align="right">${firstData[i][1]}</td>
            <td align="right">${firstData[i][2]}</td>
            <td align="right">${firstData[i][3]}</td>
            <td align="right">${firstData[i][4]}</td>
            <td>${dateConverter(firstData[i][5])}</td>
        </tr>
`};

firstTable.appendChild(firstTbody);