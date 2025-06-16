// список категорий (хранятся)
let menu = document.getElementById("menu");

// построение списка категорий
for (i = 0; i < links.length; i++) {
    menu.innerHTML += `
        <svg class="m-ctlg-icon">
            <use xlink:href="/img/icons-catalog.svg?v=004#${links[i].ID}"></use>
        </svg>`
};