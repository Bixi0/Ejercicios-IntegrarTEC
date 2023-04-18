/*
Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se esta por comer.
Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero
Consideración: El lobo solo puede comer a la oveja que tiene a su derecha.
*/

function warnTheSheep(array){
    let indexWolf = array.findIndex(element => element === "wolf")

    console.log(`Beware sheep N°${indexWolf + 1}! The wolf is at your left!`)
}

const herd1 = ["sheep", "sheep", "wolf", "sheep", "sheep"]
const herd2 = ["sheep", "wolf", "sheep", "sheep", "sheep"]
const herd3 = ["sheep", "sheep", "sheep", "wolf", "sheep"]

console.log(herd1)
warnTheSheep(herd1)
console.log()

console.log(herd2)
warnTheSheep(herd2)
console.log()

console.log(herd3)
warnTheSheep(herd3)
console.log()