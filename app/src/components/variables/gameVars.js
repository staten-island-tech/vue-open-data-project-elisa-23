import { reactive, ref } from "vue";

let selected = reactive([]);
let score = ref(0);
let round = ref(0);

export { selected, score, round };