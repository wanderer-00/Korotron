// список категорий (хранятся)
let menu = document.getElementById("menu");

// построение списка категорий
for (i = 1; i < links.length; i++) {
    menu.innerHTML += `
        <div title="${links[i].NAME}">
                <input type="radio" id="A${i}" name="A">
                <label for="A${i}">
                    <svg class="m-ctlg-icon">
                        <use xlink:href="img/icons-catalog.svg?v=004#${links[i].ID}"></use>
                    </svg>
                </label>
        </div>`
};