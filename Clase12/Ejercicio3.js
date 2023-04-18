/*

Haga una función que reciba un arreglo y un número. Tenemos que sumarle dicho número a cada elemento del arreglo y 
devolver el arreglo modificado.

*/

function sumToEveryElement(num, array){
    const newArray = array.map(element => element += num)
    return newArray;
}

const arrayOfNumbers = [40, 50, 80, 90, 100]
const number = 5

console.log(`Before: ${arrayOfNumbers}`)

console.log(`After: ${sumToEveryElement(number, arrayOfNumbers)}`)