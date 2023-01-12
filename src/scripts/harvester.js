

export const harvestPlants = (plants) => {
        console.log("harvest module")
         const newArray = []
 
         for (let plant of plants){
                for (let i=0; i < plant.output; i++){ 
                        if (plant.type === "Corn") {
                                newArray.push(plant)
                                i++
                        } else {   
                        newArray.push(plant)
                 }
                 }
         }
         console.log(newArray)
         return newArray
 }