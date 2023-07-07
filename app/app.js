import { salveItem } from "./functions/saveItem.js";
import { list, addItem } from "./objects/variables.js"

addItem.form.addEventListener("submit", event => {
    event.preventDefault();
    salveItem(addItem.input, list);
})

