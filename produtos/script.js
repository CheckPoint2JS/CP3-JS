const checkbox = document.querySelector("input[type=checkbox]");
const menu = document.querySelector("#container2");

checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
        document.body.style.backgroundColor = "white";
        menu.style.backgroundColor = "#EBD9D9";
    } else {
        document.body.style.backgroundColor = "";
        menu.style.backgroundColor = "";
    }
});
