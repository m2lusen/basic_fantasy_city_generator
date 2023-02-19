import { generateBuildingInformation } from './create_unique_buildings.mjs';

export function generate_city(buildingValueArray, populationSize){
    //buildingValueArray is an array that houses the value for the amount of buildings within the city, proportional to demand. With 0 being not present, 1 being present at sufficient capacity but no more, and 2 being at severe surplus.
    
    let buildings = ["castle", "house", "inn", "blacksmith", "carpenter", "grocer", "general good store"];
    //A list of all buildings that can be used

    let cityBuildings = [];
    //cityBuildings is the actual number of each building in the city, it is in the same order as buildingValueArray

    let buildingPercentage = [0.0001, 0.25, 0.0025, 0.002, 0.003, 0.003, 0.002];
    //buildingPercentage is a array holding the percentage of those buildings that exist for a certain sized population, it is in the same order as buildingValueArray
    
    for (let i = 0; i < buildingValueArray.length; i++){
        let numberOf = numOfBuilding(buildingPercentage[i], buildingValueArray[i], populationSize);
        cityBuildings[i] = numberOf;
        generateBuildingInformation(i, numberOf); // return to
    }
    printBuildings(cityBuildings, buildings); // temp
}


// the bellow function calculates the actual number of each individual building
function numOfBuilding(percentage, value, population){
    percentage = percentageChange(percentage);
    let numberOf = percentage * value * population;
    numberOf = Math.round(numberOf);
    return numberOf;
}

// the bellow function adds a random change to the percentage of buildings per population, of 5% +- the original value
function percentageChange(percentage){
    let randomModifier = Math.random() * 0.06;
    let type = Math.floor(Math.random() * 2);
    if (type == 0){
        randomModifier = randomModifier * -1
    }
    percentage = percentage + percentage * randomModifier;
    return percentage;
}

function printBuildings(cityBuildings, buildings){
    let querySelectorArray = ["#castleNumberDisplay", "#houseNumberDisplay", "#innNumberDisplay", "#blacksmithNumberDisplay", "#carpenterNumberDisplay", "#grocerNumberDisplay", "#gGoodNumberDisplay"]
    for (let i = 0; i < cityBuildings.length; i++){
        if (cityBuildings[i] == 1){
            document.querySelector(querySelectorArray[i]).textContent = "There is " + cityBuildings[i] + " " + buildings[i];
        } else {
            document.querySelector(querySelectorArray[i]).textContent = "There are " + cityBuildings[i] + " " + buildings[i] + "s";
        }
    }
}