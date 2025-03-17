import { reactive } from "vue";

let data = reactive([]);
let filteredData = reactive([]);
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
async function getFilteredData(option) {
    filteredData = [];
    data.forEach((name) => {
        let a = true;
        filteredData.forEach((filteredName) => {
            if (option === 'nm') {
                if (name.nm === filteredName) {
                    a = false;
                }
            } else {
                if (name.ethcty === filteredName) {
                    a = false;
                }
            }

        });
        if (a === true) {
            if (option === 'nm') {
                filteredData.push(name.nm);
            } else {
                filteredData.push(name.ethcty);
            }
        }
    });
}
export { getData, data, filteredData, getFilteredData };