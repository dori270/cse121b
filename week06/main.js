const listPriceElement = document.querySelector("#listPrice");
const odometerElement = document.querySelector("#odometer");
const vehicleNameElement = document.querySelector("#vehicleName");
const buttonElement = document.querySelector("#calculate");
const vehicleValueElement = document.querySelector("#vehicleValue");
const message = document.querySelector("#message");
const vehicle1Element = document.querySelector("#vehicle5");
const vehicle2Element = document.querySelector("#vehicle4");
const vehicle3Element = document.querySelector("#vehicle3");
const vehicle4Element = document.querySelector("#vehicle2");
const vehicle5Element = document.querySelector("#vehicle1");
const carValues = ["", "", "", "", ""]

function costPerMile(lp, o) {
    return lp / (200000 - o);
}

buttonElement.addEventListener("click", computeCost);

function computeCost() {
    if (listPriceElement.value != "" && odometerElement.value != "") {
        let listPrice = Number(listPriceElement.value);
        let odometer = Number(odometerElement.value);
        let name = vehicleNameElement.value;
        let cost = costPerMile(listPrice, odometer);
        let pricePerMile = cost.toFixed(2);
        vehicleValueElement.innerHTML = `$${pricePerMile} per mile`;
        message.innerHTML = "";
        item = `${name} at $${pricePerMile} per mile`
        carValues.unshift(item)
        vehicle1Element.innerHTML=carValues[0];
        vehicle2Element.innerHTML=carValues[1];
        vehicle3Element.innerHTML= carValues[2];
        vehicle4Element.innerHTML= carValues[3];
        vehicle5Element.innerHTML= carValues[4];

        console.log(carValues) 
        }
        
    else{
        listPriceElement.focus();
        message.innerHTML = "Please enter a valid value";
    }
}


