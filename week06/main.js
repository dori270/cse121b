const listPriceElement= document.querySelector("#listPrice");
const odometerElement= document.querySelector("#odometer");

listPriceElement.innerHTML = listPrice.value;


function costPerMile (listPrice, odometer) {
    const vehicleValue = listPrice/ (200000- odometer);
    return vehicleValue;
}

const button = document.querySelector("#calculate");
button.addEventListener("click", costPerMile(listPrice, odometer));

const vehicleValue.innerHTML = vehicleValue.value; 

// initialize input variables
let input1 = " "


// set the selectors
const vehicleName1Element = document.querySelector("#vehicleName1");


// set the innerHTML properties of the selectors
carNameElement1.innerHTML = input1;

