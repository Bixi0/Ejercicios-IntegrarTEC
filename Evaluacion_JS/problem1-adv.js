/*
    Realizar una función que verifique si un número es múltiplo de 3. No se puede usar el operador
    de módulo (%) para comprobar la multiplicidad. Utilizar funciones recursivas.
*/

function multipleOfThree(num){
    let numCharacterDigits = num.toString().split("")
    const realDigits = numCharacterDigits.map(Number)
    let sum = 0

    realDigits.forEach(number => sum += number)

    if (sum.toString().split("").length >= 2){
        multipleOfThree(sum)
    }

    return (sum === 3) || (sum === 6) || (sum === 9)
}

const number = 123