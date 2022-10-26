const listPriceElement = document.querySelector("#listPrice");
const odometerElement = document.querySelector("#odometer");
const vehicleNameElement = document.querySelector("vehicleName");
const buttonElement = document.querySelector("#calculate");
const vehicleValueElement = document.querySelector("#vehicleValue");
const message = document.querySelector("#message");


function costPerMile(lp, o) {
    return lp / (200000 - o);
}

buttonElement.addEventListener("click", computeCost);

function computeCost() {
    if (listPriceElement.value != "" && odometerElement.value != "") {
        let listPrice = Number(listPriceElement.value);
        let odometer = Number(odometerElement.value);
        let cost = costPerMile(listPrice, odometer);
        vehicleValueElement.innerHTML = `$${cost.toFixed(2)}`;
        message.innerHTML = "";
    } 
    else{
        listPriceElement.focus();
        message.innerHTML = "Please enter a valid value";
    }
}

