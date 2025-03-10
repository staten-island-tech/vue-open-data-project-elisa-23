import { reactive } from "vue";

let data = reactive([]);
async function getData() {
    try {
        let response = await fetch("https://data.cityofnewyork.us/resource/25th-nujf.json");
        if (response.status != 200) {       /* 200 = it works */
            throw new Error(response);
        } else {
            data = [];
            data = await response.json();
        }
    } catch (error) {
        console.log(error);
        alert("Apologies, the data has been lost. Please reboot.")
    }
}
getData();

export { getData, data };