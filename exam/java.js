const list = document.getElementsByClassName("table table-hover")[0].querySelector("tbody");

const addBtn = document.getElementById("styled-button");
const clearBtn = document.getElementById("clear-button");

const nameBox = document.getElementById("name");
const priceBox = document.getElementById("termin");
const rowBox = document.getElementById("prior");
const placeBox = document.getElementById("description");

const searchBox = document.getElementById("search");

let removed = [];

function tableSearch() {
    var phrase = document.getElementById('search');
    var table = document.getElementById('ToDoList-table');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
}
function addItem(text, type, toLast, innrhtml = "") {
    let item = document.createElement(type);
    item.innerText = text;
    if (innrhtml != "")
{
        item.innerHTML = innrhtml;
        item.firstChild.addEventListener('click', function handleClick(event) {
            removed.splice(removed.indexOf(item.parentElement));
            list.removeChild(item.parentElement);
});
        item.firstChild.value = "X";
}
    if (toLast) {
        list.lastChild.appendChild(item);
    } else {
        list.appendChild(item);
    }
}
addBtn.onclick = () => {
    if (nameBox.value != "" &&
        priceBox.value != "" &&
        rowBox.value != "" &&
        placeBox.value != "") {
        addItem("", "tr", false);
        addItem(nameBox.value, "td", true);
        addItem(priceBox.value, "td", true);
        addItem(rowBox.value, "td", true);
        addItem(placeBox.value, "td", true);
        addItem("", "td", true, "<input type=\"button\" class=\"btn btn-danger\"></input>");

        buffer = list;
        onin();
    }
}

clearBtn.onclick = () => {
    list.innerHTML = "";
}