/*  
    Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3.
    En caso de recibir un arreglo de menos de 5 elementos, mostrar en pantalla un mensaje de error.
*/

 function deleteLastThreeElements(array){
    if(array.length >= 5){
        array.splice((array.length - 3), 3)
        console.log(array)
        console.log("Deleted Successfully")
        return;
    }

    console.log(array)
    console.log("The recieved array has less than 5 elements")
 }

const moreThanFive = [1, 2, 3, 4, 5, 6, 7]
const lessThanFive = [1, 2, 3]


deleteLastThreeElements(moreThanFive)
deleteLastThreeElements(lessThanFive)