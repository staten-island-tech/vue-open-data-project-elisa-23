import { reactive } from "vue";

let selected = reactive([]);
let selectedNames = reactive([]);

function update(value) {
    selected = value;
}


export { selected, update, selectedNames };