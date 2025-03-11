import { reactive } from "vue";

let selected = reactive([]);
let randNames = reactive([]);

function update(value) {
    selected = value;
}


export { selected, update, randNames };