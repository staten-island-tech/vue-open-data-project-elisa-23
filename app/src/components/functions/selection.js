import { reactive, ref } from "vue";

let selected = ref('');
let selectedNames = reactive([]);

function update(value) {
    selected.value = value;
}


export { selected, update, selectedNames };