console.log("Welcome to the main module")


//import functions from plan module
import {createPlan} from "./plan.js"
//import function from tractor module
import {plantSeeds} from "./tractor.js"
//import function from field module
import {usePlants} from "./field.js"
//import function from harvester module
import { harvestPlants } from "./harvester.js"
import {catalogedFood} from "./catalog.js"

const parentHTMLElement = document.querySelector(".container")

//begin process of main module
let yearlyPlan = createPlan()
console.log(yearlyPlan)
let field = plantSeeds(yearlyPlan)
console.log(field)
let harvestedField = harvestPlants(field)

parentHTMLElement.innerHTML = catalogedFood(harvestedField)





