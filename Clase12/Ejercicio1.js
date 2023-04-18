// 1- Haga una función que elimine el primer elemento de un arreglo.

function deleteFirstElement (array){
    array.pop();
}

const numbers = [1, 2, 3, 4, 5];

console.log(`Before: ${numbers}`);

deleteFirstElement(numbers);

console.log(`After: ${numbers}`);