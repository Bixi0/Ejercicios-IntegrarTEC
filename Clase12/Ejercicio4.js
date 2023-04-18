/*
Haga una función que reciba un número y devuelva un arreglo que tenga el tamaño del número recibido.
El contenido del arreglo deben ser números desde el 1 hasta el número recibido. (1 a n)
*/

function createArrayWithNElements(num){
    const array = [1]
    for (let i = 2; i <= num; i++){
        array.push(i)
    }

    console.log(`Created array with ${num} elements.`)
    return array
}

console.log(createArrayWithNElements(10))