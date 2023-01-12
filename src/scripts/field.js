const fieldObj = []


export const addPlant = (seed) => {
    if (Array.isArray(seed)){
        for (let seedItem of seed)
        fieldObj.push(seedItem)
    } else { 
        fieldObj.push(seed)
    }
    return fieldObj
}

export const usePlants = () => {
    const arrayCopy = fieldObj
    return arrayCopy
    
}
