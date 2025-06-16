// список категорий (хранятся)
let menu = document.getElementById("menu");

// построение списка категорий
for (i = 0; i < links.length; i++) {
    menu.innerHTML += `<a href="#">${links[i]}</a>`
};