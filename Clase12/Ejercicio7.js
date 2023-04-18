/*
Dado un arreglo de números enteros, encuentre el mayor producto posible entre dos números adyacentes y devuelva el valor 
de dicho producto.
*/

function biggestProduct(array){
    let output = array[1] * array[2]

    array.forEach(element => {
        for (let i = 0; i <= array.length; i++){
            if (element === array[i]){
                continue
            } else if ((element * array[i]) > output){
                output = element * array[i]
            }
        }
    })

    return output
}

const numbers = [1, 2, 3, 4, 5]

console.log(biggestProduct(numbers))