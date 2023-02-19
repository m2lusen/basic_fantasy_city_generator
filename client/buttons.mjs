//// City Name
import { updatefName } from './create_unique_buildings.mjs'

let cityName = "The City";

document.querySelector('#cityNameEnter').addEventListener('click', cityNameChange);

function cityNameChange(){
    cityName = document.querySelector('#cityName').value;
    document.querySelector('#cityNameDisplay').textContent = cityName;
    updatefName(cityName);
}

//// population
let cityPopulation = 5050;

document.querySelector('#populationEnter').addEventListener('click', populationChange);

function populationChange(){
    cityPopulation = document.querySelector('#populationSize').value;
    window.alert(cityPopulation);// temporary
}

//// Building Value Array
let buildingValueArray = [1, 1, 1, 1, 1, 1, 1];

document.querySelector('#enterValues').addEventListener('click', buildingValueArrayChange);

// updates buildingValueArray with new values
function buildingValueArrayChange(){ // add check to see if the new value is between 0 and 2
    let selectorArray = ['#castleValue', '#houseValue', '#innValue', '#blacksmithValue', '#carpenterValue', '#grocerValue', '#gGoodValue']
    for (let i = 0; i < selectorArray.length; i++){
        buildingValueArray[i] = document.querySelector(selectorArray[i]).value / 100;
    }
    window.alert(buildingValueArray);// temporary
}



//// Generate City
import { generate_city } from './create_city.mjs';

document.querySelector('#createCity').addEventListener('click', cityGeneration);

function cityGeneration(){
    clearTemporary()
    generate_city(buildingValueArray, cityPopulation);
}

function clearTemporary(){
    console.log("present")

    const allTemp = document.querySelectorAll(".temporary");

    allTemp.forEach(temporary => {
    temporary.remove();
    });
}