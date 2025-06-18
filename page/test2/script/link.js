// список категорий (хранятся)
let menu = document.getElementById("menu");

// построение списка категорий
for (i = 0; i < links.length; i++) {
    menu.innerHTML += `
        <div title="${links[i].NAME}">
                <input type="radio" id="A${i+1}" name="A">
                <label for="A${i+1}">
                    <svg class="m-ctlg-icon">
                        <use xlink:href="/img/icons-catalog.svg?v=004#${links[i].ID}"></use>
                    </svg>
                </label>
        </div>`
};