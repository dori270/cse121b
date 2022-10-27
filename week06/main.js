const listPriceElement = document.querySelector("#listPrice");
const odometerElement = document.querySelector("#odometer");
const vehicleNameElement = document.querySelector("vehicleName");
const buttonElement = document.querySelector("#calculate");
const vehicleValueElement = document.querySelector("#vehicleValue");
const message = document.querySelector("#message");
const firstPlaceElement = document.querySelector("#firstPlace");
const secondPlaceElement = document.querySelector("#secondPlace");
let carValues = [];

function costPerMile(lp, o) {
    return lp / (200000 - o);
}

buttonElement.addEventListener("click", computeCost);

function computeCost() {
    if (listPriceElement.value != "" && odometerElement.value != "") {
        let listPrice = Number(listPriceElement.value);
        let odometer = Number(odometerElement.value);
        let cost = costPerMile(listPrice, odometer);
        let pricePerMile = cost.toFixed(2);
        vehicleValueElement.innerHTML = `$${pricePerMile} per mile`;
        message.innerHTML = "";
        carValues.push(`$${pricePerMile}`);
        firstPlaceElement.innerHTML = carValues; 

    } 
    else{
        listPriceElement.focus();
        message.innerHTML = "Please enter a valid value";
    }
}

