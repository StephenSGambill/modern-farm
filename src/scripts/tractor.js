import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"
import {addPlant} from "./field.js"


export const plantSeeds = (plan) => {
  console.log("tractor module")
  let returnedArray = []
  
  for (let plantItem of plan){
      for (let i = 0; i < plantItem.length; i++){
             if (plantItem[i] === "Asparagus"){
        returnedArray = addPlant(createAsparagus())
      } else if (plantItem[i] === "Corn"){
        returnedArray = addPlant(createCorn())
      } else if (plantItem[i] === "Potato"){
        returnedArray = addPlant(createPotato())
      } else if (plantItem[i] === "Soybean"){
        returnedArray = addPlant(createSoybean())
      } else if (plantItem[i] === "Sunflower"){
        returnedArray = addPlant(createSunflower())
      } else if (plantItem[i] === "Wheat"){
        returnedArray = addPlant(createWheat())
      }  
  } 
} return returnedArray
}
