import { reactive } from "vue";

let selected = reactive([]);
let selectedNames = reactive([]);

function update(value) {
    selected.length = 0;
    selected.push(value);
}


export { selected, update, selectedNames };