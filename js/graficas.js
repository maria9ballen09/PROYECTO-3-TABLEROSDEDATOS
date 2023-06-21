const loaderContainer = document.querySelector(".loader-container")
const canvasChart = document.getElementById("myChart").getContext("2d");
let moneyData = {};

function showLoader(){
    loaderContainer.style.display ="center"
}

function hideLoader (){
    loaderContainer.style.dysplay ="flex"
}

function renderChart() {
    myChart = new Chart(canvasChart, {
 type: "line",
 data: {
   labels: Object.keys(moneyData.rates),
   datasets: [
       {
           label: "Valor del Euro",
           data: Object.values(moneyData.rates),
           borderWidth: 3,
           backgroundColor: ["green"],
           borderColor:["green"],
           
       }
   ]
 }
});

}
function filtroRates(){
    Object.keys(moneyData.rates).forEach(rate => {
        if (moneyData.rates[rate] > 23){
            delete moneyData.rates[rate] 
        } 
    })
}
async function getMoney () {
    showLoader();
   const response = await axios.get(
        "https://api.frankfurter.app/latest"
       )

    moneyData = response.data;

    
    console.log(moneyData);
    filtroRates();
    renderChart();
       
    
}

getMoney();

