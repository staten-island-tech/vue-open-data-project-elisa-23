import { reactive } from "vue";

let selected = reactive([]);

function update(value) {
    selected = value;
}


export { selected, update };