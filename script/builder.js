// кластер карточек
let cluster = document.getElementById("cluster");

// внесение карточек в 'cluster'
for(i=0;i<dataProgect111.length;i++){
    // структура карточки товара
    cluster.innerHTML += `
        <div class="card">
            <div class="icon" style="background-image: url(img/card_icon/apple.png)"></div>
            <div class="name">${dataProgect111[i].NAME}</div>
            <div class="color">${dataProgect111[i].COLOR}</div>
            <div class="article">${dataProgect111[i].ARTICLE}</div>
        </card>
    `;
};