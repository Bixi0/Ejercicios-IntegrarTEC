/*
Realizar una función que verifique si un número es múltiplo de 3. No se puede usar el operador
de módulo (%) para comprobar la multiplicidad.
*/

//Converts number into an array of their digits
const sumDigits = (num) => {
    let numCharacterDigits = num.toString().split("")
    const realDigits = numCharacterDigits.map(Number)
    let sum = 0

    realDigits.forEach(number => sum += number)
    return sum
}


//Verify if a number is multiple of three using sumDigits
function multipleOfThree(num){
    let sum = sumDigits(num)

    while (sum.toString().split("").length >= 2){
        sum = sumDigits(sum)
    }

    return ((sum === 3) || (sum === 6) || (sum === 9))
}

let number = 123