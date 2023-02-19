import { createButton } from './create_buttons.mjs'

let fNameArray = [
["The city"],// add location of districts in the city, possibly noble households?
["Palmer's", "Whitley's", "Johnson's", "Kimble's", "Wellington's", "Smith's", "Kippling's", "Tennant's"],// Add peoples last names with function
["The drunken", "The sleeping", "The Red", "The Green", "The Blue", "The wild"],
["Palmer's", "Whitley's", "Johnson's", "Kimble's", "Wellington's", "Smith's", "Kippling's", "Tennant's"],// Add peoples last names with function
["Palmer's", "Whitley's", "Johnson's", "Kimble's", "Wellington's", "Smith's", "Kippling's", "Tennant's"],// Add peoples last names with function
["Palmer's", "Whitley's", "Johnson's", "Kimble's", "Wellington's", "Smith's", "Kippling's", "Tennant's"],// Add peoples last names with function
["Palmer's", "Whitley's", "Johnson's", "Kimble's", "Wellington's", "Smith's", "Kippling's", "Tennant's"]// Add peoples last names with function
];

export function updatefName(cityName){
    fNameArray[0][0] = cityName;
}

let mNameArray = [
[],// Not usable, will have to find some way to ensure that it is not used
[],// Not usable, will have to find some way to ensure that it is not used
["Huntsman", "Mare", "Horse", "Bear", "Deer", "Elk", "Woodsman", "Miner", "Hog", "Pig", "Lion"],
[],// Not usable, will have to find some way to ensure that it is not used
[],// Not usable, will have to find some way to ensure that it is not used
[],// Not usable, will have to find some way to ensure that it is not used
[]// Not usable, will have to find some way to ensure that it is not used
];

let lNameArray = [
["castle", "keep", "stronghold", "Fortress"],
["household", "cottage", "estate"],
["Inn", "tavern", "Bar", "Pub", ""],
["Blacksmith", "Ironworks", "Metalworks"],
["Carpentry", "Woodworks"],
["Grocers", "Grocery", "Fruit & Vegtable's store"],
["Store", "general good's store"]
];

let buildingNameArray = [ // array must be cleared when new city is generated
[],
[],
[],
[],
[],
[],
[],    
];

export function generateBuildingInformation(i, numberOf){
    for (let j = 0; j < numberOf; j++){
        let buildingName = nameGeneration(fNameArray, mNameArray, lNameArray, i);
        buildingNameArray[i][j] = buildingName;
    }
    printBuildingNames(i);
}

function nameGeneration(fName, mName, lName, i){
    let buildingFName = Math.floor(Math.random() * fName[i].length);
    // let buildingMName = Math.floor(Math.random() * mName[i].length);// ensure that only works when there are more than is more than zero values
    let buildingLName = Math.floor(Math.random() * lName[i].length);
    let buildingName = fName[i][buildingFName] + " " + lName[i][buildingLName];
    return buildingName;
}

//Add function to prevent duplication of names
    //Add some kind of alert if a name can not be given

//Add function to set up all of the possible last names

function printBuildingNames(i){
    let querySelectorArray = ["#castleDisplay", "#houseDisplay", "#innDisplay", "#blacksmithDisplay", "#carpenterDisplay", "#grocerDisplay", "#gGoodDisplay"]
    let querySelectorButtonArray = ["#castleButtonDisplay", "#houseButtonDisplay", "#innButtonDisplay", "#blacksmithButtonDisplay", "#carpenterButtonDisplay", "#grocerButtonDisplay", "#gGoodButtonDisplay"]
    createButton(querySelectorArray[i], querySelectorArray[i], querySelectorButtonArray[i]);
    for (let j = 0; j < buildingNameArray[i].length; j++){
        let element = document.createElement('p');
        element.id = querySelectorArray[i] + j;
        element.textContent = buildingNameArray[i][j];
        element.class = querySelectorArray[i];
        document.querySelector(querySelectorArray[i]).appendChild(element);
    }
}
