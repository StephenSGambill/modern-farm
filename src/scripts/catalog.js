   
let htmlString = ""

export const catalogedFood = (harvestedFood) =>{
    for (let food of harvestedFood){
       htmlString += `<section class="plant">${food.type}</section>`
    }
    return htmlString
}

